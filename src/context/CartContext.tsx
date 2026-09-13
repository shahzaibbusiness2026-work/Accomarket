"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Account, CartItem, OrderData, AdminActivityLog } from "@/types";
import { KARMA_ACCOUNTS } from "@/lib/data";

const DEFAULT_ORDERS: OrderData[] = [
  {
    orderId: "AM-9842-1029",
    timestamp: "2026-09-13T04:15:00Z",
    account: KARMA_ACCOUNTS[0],
    quantity: 1,
    subtotal: 149.0,
    email: "lead-buyer@apexcapital.io",
    status: "locked",
    paymentMethod: "Credit Card (Stripe 256-bit)",
  },
  {
    orderId: "AM-7312-8840",
    timestamp: "2026-09-12T19:40:00Z",
    account: KARMA_ACCOUNTS[2],
    quantity: 1,
    subtotal: 299.0,
    email: "growth@blockscale.xyz",
    status: "released",
    paymentMethod: "USDT (Tether - TRC20)",
  },
  {
    orderId: "AM-5104-3321",
    timestamp: "2026-09-12T14:12:00Z",
    account: KARMA_ACCOUNTS[1],
    quantity: 2,
    subtotal: 178.0,
    email: "sarah.m@venturelab.co",
    status: "released",
    paymentMethod: "Credit Card (Visa •••• 4242)",
  },
  {
    orderId: "AM-2201-9044",
    timestamp: "2026-09-11T11:05:00Z",
    account: KARMA_ACCOUNTS[3],
    quantity: 1,
    subtotal: 69.0,
    email: "dan@cryptodao.eth",
    status: "disputed",
    paymentMethod: "USDC (Arbitrum)",
  },
];

interface CartContextType {
  cart: CartItem[];
  addToCart: (accountId: string, qty?: number) => void;
  removeFromCart: (accountId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  proofAccount: Account | null;
  openProofModal: (accountId: string) => void;
  closeProofModal: () => void;
  toast: { message: string; type: "success" | "info" | "error" } | null;
  showToast: (message: string, type?: "success" | "info" | "error") => void;
  saveOrder: (order: OrderData) => void;
  getLastOrder: () => OrderData | null;
  // Admin & Inventory Management
  accounts: Account[];
  addAccount: (acc: Account) => void;
  updateAccount: (id: string, updates: Partial<Account>) => void;
  deleteAccount: (id: string) => void;
  orders: OrderData[];
  updateOrderStatus: (orderId: string, status: "locked" | "released" | "disputed") => void;
  logs: AdminActivityLog[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [proofAccount, setProofAccount] = useState<Account | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" | "error" } | null>(null);

  // Dynamic Inventory & Orders state
  const [accounts, setAccounts] = useState<Account[]>(KARMA_ACCOUNTS);
  const [orders, setOrders] = useState<OrderData[]>(DEFAULT_ORDERS);
  const [logs, setLogs] = useState<AdminActivityLog[]>([
    {
      id: "LOG-1",
      timestamp: "Just now",
      type: "order",
      message: "Order AM-9842-1029 placed via Credit Card ($149.00)",
      badge: "Escrow Locked",
    },
    {
      id: "LOG-2",
      timestamp: "1 hour ago",
      type: "escrow",
      message: "Escrow released for Order AM-7312-8840 ($299.00)",
      badge: "Completed",
    },
    {
      id: "LOG-3",
      timestamp: "3 hours ago",
      type: "security",
      message: "Automated OAuth shadowban bot audit completed (0 strikes)",
      badge: "Clean",
    },
  ]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("accomarket_cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([{ id: "RDT-A492", title: "Established Account", price: 149.0, quantity: 1 }]);
      }

      const storedInventory = localStorage.getItem("accomarket_inventory");
      if (storedInventory) {
        setAccounts(JSON.parse(storedInventory));
      }

      const storedOrders = localStorage.getItem("accomarket_all_orders");
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch {
      setCart([{ id: "RDT-A492", title: "Established Account", price: 149.0, quantity: 1 }]);
    }
  }, []);

  const saveCartToStorage = (updated: CartItem[]) => {
    setCart(updated);
    try {
      localStorage.setItem("accomarket_cart", JSON.stringify(updated));
    } catch {}
  };

  const saveAccountsToStorage = (updated: Account[]) => {
    setAccounts(updated);
    try {
      localStorage.setItem("accomarket_inventory", JSON.stringify(updated));
    } catch {}
  };

  const saveOrdersToStorage = (updated: OrderData[]) => {
    setOrders(updated);
    try {
      localStorage.setItem("accomarket_all_orders", JSON.stringify(updated));
    } catch {}
  };

  const addToCart = (accountId: string, qty: number = 1) => {
    const acc = accounts.find((a) => a.id === accountId) || KARMA_ACCOUNTS.find((a) => a.id === accountId);
    if (!acc) return;

    const existingIndex = cart.findIndex((i) => i.id === accountId);
    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cart];
      updated[existingIndex].quantity += qty;
    } else {
      updated = [...cart, { id: acc.id, title: acc.title, price: acc.price, quantity: qty }];
    }
    saveCartToStorage(updated);
    showToast(`Added ${acc.title} to your basket!`, "success");
  };

  const removeFromCart = (accountId: string) => {
    const updated = cart.filter((i) => i.id !== accountId);
    saveCartToStorage(updated);
  };

  const clearCart = () => {
    saveCartToStorage([]);
    showToast("Basket cleared", "info");
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openProofModal = (accountId: string) => {
    const acc = accounts.find((a) => a.id === accountId) || KARMA_ACCOUNTS.find((a) => a.id === accountId) || KARMA_ACCOUNTS[0];
    setProofAccount(acc);
  };

  const closeProofModal = () => setProofAccount(null);

  const showToast = (message: string, type: "success" | "info" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 2800);
  };

  const saveOrder = (order: OrderData) => {
    try {
      localStorage.setItem("accomarket_last_order", JSON.stringify(order));
      const newOrders = [order, ...orders];
      saveOrdersToStorage(newOrders);
      setLogs((prev) => [
        {
          id: `LOG-${Date.now()}`,
          timestamp: "Just now",
          type: "order",
          message: `New Order ${order.orderId} placed for ${order.account.title} ($${order.subtotal.toFixed(2)})`,
          badge: "Escrow Locked",
        },
        ...prev,
      ]);
    } catch {}
  };

  const getLastOrder = (): OrderData | null => {
    try {
      const stored = localStorage.getItem("accomarket_last_order");
      if (stored) return JSON.parse(stored);
    } catch {}
    return orders[0] || null;
  };

  // Admin Actions
  const addAccount = (newAcc: Account) => {
    const updated = [newAcc, ...accounts];
    saveAccountsToStorage(updated);
    setLogs((prev) => [
      {
        id: `LOG-${Date.now()}`,
        timestamp: "Just now",
        type: "listing",
        message: `New listing created: ${newAcc.title} (${newAcc.id}) at $${newAcc.price.toFixed(2)}`,
        badge: "New Listing",
      },
      ...prev,
    ]);
    showToast(`Listing ${newAcc.title} created successfully!`, "success");
  };

  const updateAccount = (id: string, updates: Partial<Account>) => {
    const updated = accounts.map((acc) => (acc.id === id ? { ...acc, ...updates } : acc));
    saveAccountsToStorage(updated);
    showToast(`Listing ${id} updated!`, "success");
  };

  const deleteAccount = (id: string) => {
    const updated = accounts.filter((acc) => acc.id !== id);
    saveAccountsToStorage(updated);
    setLogs((prev) => [
      {
        id: `LOG-${Date.now()}`,
        timestamp: "Just now",
        type: "listing",
        message: `Listing removed: ${id}`,
        badge: "Deleted",
      },
      ...prev,
    ]);
    showToast(`Listing ${id} removed from inventory`, "info");
  };

  const updateOrderStatus = (orderId: string, status: "locked" | "released" | "disputed") => {
    const updated = orders.map((o) => (o.orderId === orderId ? { ...o, status } : o));
    saveOrdersToStorage(updated);
    setLogs((prev) => [
      {
        id: `LOG-${Date.now()}`,
        timestamp: "Just now",
        type: "escrow",
        message: `Order ${orderId} escrow status changed to ${status.toUpperCase()}`,
        badge: status.toUpperCase(),
      },
      ...prev,
    ]);
    showToast(`Order ${orderId} marked as ${status.toUpperCase()}`, "success");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        openCart,
        closeCart,
        proofAccount,
        openProofModal,
        closeProofModal,
        toast,
        showToast,
        saveOrder,
        getLastOrder,
        accounts,
        addAccount,
        updateAccount,
        deleteAccount,
        orders,
        updateOrderStatus,
        logs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
