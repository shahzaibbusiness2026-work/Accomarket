"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Account } from "@/types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DownloadIcon from "@mui/icons-material/Download";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export default function AdminDashboardPage() {
  const {
    accounts,
    addAccount,
    updateAccount,
    deleteAccount,
    orders,
    updateOrderStatus,
    logs,
    showToast,
  } = useCart();

  const [activeTab, setActiveTab] = useState<"listings" | "orders" | "logs" | "settings">("listings");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTier, setFilterTier] = useState("all");

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);

  // New Listing Form State
  const [newAccForm, setNewAccForm] = useState<Partial<Account>>({
    id: `RDT-${Math.floor(1000 + Math.random() * 9000)}`,
    title: "",
    subtitle: "Organic Engagement • Clean Standing",
    price: 99,
    ageYears: 2.5,
    ageDisplay: "2.5 years",
    totalKarma: 15000,
    totalKarmaDisplay: "15,000",
    postsCount: 350,
    commentsCount: 2100,
    postKarma: 3500,
    commentKarma: 11500,
    stock: 1,
    badge: "Verified",
    badgeType: "verified",
    tier: "Authority Member",
    sku: `RDT-2YR-${Math.floor(100 + Math.random() * 900)}`,
    registrationDate: "12 Aug 2024",
    emailStatus: "Transferable (Clean Sterile OG Mail)",
    shadowbanAudit: "100% (0 Strikes)",
    tags: ["1+ Year", "10K+ Karma", "Verified Email", "Active"],
    hash: `#0x${Math.random().toString(16).substring(2, 6).toUpperCase()}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`,
    vaultUsername: "u/curated_member",
    vaultPasskey: "M4$t3r_P@ss_2026!",
    vaultEmail: "transfer-sterile-auto@accomarket.net",
    vaultToken: `tk_live_${Math.floor(1000 + Math.random() * 9000)}`,
    communities: [
      { name: "r/technology", karma: 6200, percent: "41.3%", color: "bg-[#FF4500]" },
      { name: "r/AskReddit", karma: 5100, percent: "34.0%", color: "bg-[#FF6B35]" },
      { name: "r/science", karma: 3700, percent: "24.7%", color: "bg-[#FFA07A]" },
    ],
    badges: [
      { title: "Two-Year Club", date: "Granted Aug 2026", icon: "workspace_premium", color: "text-[#FF4500]" },
      { title: "Verified Email", date: "Validated 2024", icon: "verified_user", color: "text-green-600" },
    ],
    trajectory: [
      { year: "'24", height: "35%", val: "3.2k" },
      { year: "'25", height: "70%", val: "9.8k" },
      { year: "'26", height: "100%", val: "15.0k" },
    ],
  });

  // Filtered Listings
  const filteredListings = useMemo(() => {
    let list = [...accounts];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (acc) =>
          acc.title.toLowerCase().includes(q) ||
          acc.id.toLowerCase().includes(q) ||
          acc.subtitle.toLowerCase().includes(q)
      );
    }
    if (filterTier !== "all") {
      list = list.filter((acc) => acc.badgeType === filterTier);
    }
    return list;
  }, [accounts, searchQuery, filterTier]);

  // Aggregate Metrics
  const metrics = useMemo(() => {
    const totalVolume = orders.reduce((sum, o) => sum + o.subtotal, 0) + 28400;
    const activeEscrow = orders
      .filter((o) => o.status === "locked")
      .reduce((sum, o) => sum + o.subtotal, 0) + 1420;
    const totalListings = accounts.length;
    const totalStock = accounts.reduce((sum, a) => sum + a.stock, 0);
    return { totalVolume, activeEscrow, totalListings, totalStock };
  }, [orders, accounts]);

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAccForm.title) {
      showToast("Please enter a title for the listing", "error");
      return;
    }

    const created: Account = {
      id: newAccForm.id || `RDT-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newAccForm.title,
      subtitle: newAccForm.subtitle || "Organic Discussions • Clean Standing",
      registrationDate: newAccForm.registrationDate || "12 Jan 2024",
      sku: newAccForm.sku || `RDT-SKU-${Math.floor(100 + Math.random() * 900)}`,
      ageYears: Number(newAccForm.ageYears) || 2.0,
      ageDisplay: `${newAccForm.ageYears} years`,
      price: Number(newAccForm.price) || 99,
      stock: Number(newAccForm.stock) || 1,
      tier: newAccForm.tier || "Authority Member",
      types: ["aged", "verified"],
      postKarma: Number(newAccForm.postKarma) || 3000,
      commentKarma: Number(newAccForm.commentKarma) || 9000,
      totalKarma: Number(newAccForm.totalKarma) || 12000,
      totalKarmaDisplay: Number(newAccForm.totalKarma).toLocaleString() || "12,000",
      postsCount: Number(newAccForm.postsCount) || 250,
      commentsCount: Number(newAccForm.commentsCount) || 1500,
      badge: newAccForm.badge || "Verified",
      badgeType: (newAccForm.badgeType as "verified" | "best-value") || "verified",
      emailStatus: newAccForm.emailStatus || "Transferable (Clean Sterile OG Mail)",
      shadowbanAudit: "100% (0 Strikes)",
      tags: newAccForm.tags || ["1+ Year", "10K+ Karma", "Verified Email", "Active"],
      communities: newAccForm.communities || [],
      badges: newAccForm.badges || [],
      trajectory: newAccForm.trajectory || [],
      hash: newAccForm.hash || "#0x889F...7AC1",
      vaultPasskey: newAccForm.vaultPasskey || "VaultPass_2026!",
      vaultUsername: newAccForm.vaultUsername || `u/${newAccForm.title.toLowerCase().replace(/\s+/g, "_")}`,
      vaultEmail: newAccForm.vaultEmail || "vault-auto@accomarket.net",
      vaultToken: newAccForm.vaultToken || "tk_live_auto",
    };

    addAccount(created);
    setIsAddModalOpen(false);
    setNewAccForm({
      id: `RDT-${Math.floor(1000 + Math.random() * 9000)}`,
      title: "",
      price: 99,
      ageYears: 2.5,
      totalKarma: 15000,
      stock: 1,
    });
  };

  const handleUpdateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAccount) return;
    updateAccount(editingAccount.id, {
      title: editingAccount.title,
      price: Number(editingAccount.price),
      stock: Number(editingAccount.stock),
      totalKarma: Number(editingAccount.totalKarma),
      totalKarmaDisplay: Number(editingAccount.totalKarma).toLocaleString(),
      badge: editingAccount.badge,
      badgeType: editingAccount.badgeType,
    });
    setEditingAccount(null);
  };

  const handleExportDatabase = () => {
    const data = {
      timestamp: new Date().toISOString(),
      inventory: accounts,
      orders,
      logs,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AccoMarket_Database_Export_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Marketplace database exported as JSON!", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-gray-950 text-white border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-xl sm:text-2xl font-black tracking-tight flex items-center">
                <span className="text-white">Acco</span>
                <span className="text-[#FF4500]">Market</span>
              </div>
            </Link>
            <span className="px-2.5 py-0.5 rounded-md bg-[#FF4500]/20 text-[#FF4500] border border-[#FF4500]/30 text-xs font-bold uppercase tracking-wider">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-800/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Escrow Multi-Sig Node: Online
            </div>

            <button
              onClick={handleExportDatabase}
              className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Export database JSON"
            >
              <DownloadIcon className="!text-[16px]" />
              <span className="hidden sm:inline">Export DB</span>
            </button>

            <Link
              href="/"
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
            >
              <StorefrontIcon className="!text-[16px]" />
              <span>Live Storefront</span>
            </Link>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-1.5 rounded-lg bg-[#FF4500] hover:bg-[#E03D00] text-xs font-bold text-white shadow-xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <AddIcon className="!text-[18px]" />
              <span>New Listing</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 flex-1">
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
              <AttachMoneyIcon className="!text-[28px]" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 block">Total Gross Volume</span>
              <span className="text-2xl font-black text-gray-900">
                ${metrics.totalVolume.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-[11px] text-green-600 font-semibold block mt-0.5">
                ↑ +18.4% this week
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldIcon className="!text-[28px]" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 block">Active in Escrow</span>
              <span className="text-2xl font-black text-gray-900">
                ${metrics.activeEscrow.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                ● 100% Funds Secured
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <InventoryIcon className="!text-[28px]" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 block">Active Listings</span>
              <span className="text-2xl font-black text-gray-900">{metrics.totalListings} Profiles</span>
              <span className="text-[11px] text-gray-500 font-medium block mt-0.5">
                {metrics.totalStock} total available units
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
              <FactCheckIcon className="!text-[28px]" />
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400 block">Escrow Clearance</span>
              <span className="text-2xl font-black text-gray-900">99.8%</span>
              <span className="text-[11px] text-purple-600 font-semibold block mt-0.5">
                0 Strikes / 0 Chargebacks
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab("listings")}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "listings"
                  ? "border-[#FF4500] text-[#FF4500]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span>Listings & Inventory ({accounts.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "orders"
                  ? "border-[#FF4500] text-[#FF4500]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span>Escrow Orders ({orders.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("logs")}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "logs"
                  ? "border-[#FF4500] text-[#FF4500]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span>Audit Logs ({logs.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "settings"
                  ? "border-[#FF4500] text-[#FF4500]"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <span>Platform Settings</span>
            </button>
          </nav>
        </div>

        {/* TAB 1: LISTINGS MANAGEMENT */}
        {activeTab === "listings" && (
          <div className="space-y-4">
            {/* Search & Action Bar */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 !text-[20px]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, SKU, or ID..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF4500] focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <select
                  value={filterTier}
                  onChange={(e) => setFilterTier(e.target.value)}
                  className="text-xs font-semibold px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF4500]"
                >
                  <option value="all">All Tiers & Badges</option>
                  <option value="verified">Verified Only</option>
                  <option value="best-value">Best Value Only</option>
                </select>

                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-4 py-2 bg-[#FF4500] hover:bg-[#E03D00] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <AddIcon className="!text-[18px]" />
                  <span>Create Listing</span>
                </button>
              </div>
            </div>

            {/* Listings Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase font-bold text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Account / SKU</th>
                      <th className="py-3.5 px-4">Age</th>
                      <th className="py-3.5 px-4">Total Karma</th>
                      <th className="py-3.5 px-4">Activity</th>
                      <th className="py-3.5 px-4">Price</th>
                      <th className="py-3.5 px-4">Stock</th>
                      <th className="py-3.5 px-4">Badge</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredListings.map((acc) => (
                      <tr key={acc.id} className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FF4500] flex items-center justify-center font-bold shrink-0">
                              <SmartToyIcon className="!text-[18px]" />
                            </div>
                            <div>
                              <span className="font-bold text-gray-900 block">{acc.title}</span>
                              <span className="font-mono text-[11px] text-gray-400">{acc.sku}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-700">{acc.ageDisplay}</td>
                        <td className="py-4 px-4 font-bold text-gray-900">{acc.totalKarmaDisplay}</td>
                        <td className="py-4 px-4 text-gray-500">
                          {acc.postsCount} posts • {acc.commentsCount} comments
                        </td>
                        <td className="py-4 px-4 font-black text-gray-950 text-sm">
                          ${acc.price.toFixed(2)}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              acc.stock > 0
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                          >
                            {acc.stock > 0 ? `${acc.stock} Available` : "Sold Out"}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                              acc.badgeType === "best-value"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : "bg-green-50 text-green-700 border-green-200"
                            }`}
                          >
                            {acc.badge}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <Link
                              href={`/listing?id=${acc.id}`}
                              target="_blank"
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                              title="View storefront page"
                            >
                              <LaunchIcon className="!text-[16px]" />
                            </Link>
                            <button
                              onClick={() => setEditingAccount(acc)}
                              className="p-1.5 text-gray-400 hover:text-[#FF4500] hover:bg-orange-50 rounded-lg transition-colors cursor-pointer"
                              title="Edit listing details"
                            >
                              <EditOutlinedIcon className="!text-[16px]" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Are you sure you want to remove ${acc.title}?`)) {
                                  deleteAccount(acc.id);
                                }
                              }}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete listing"
                            >
                              <DeleteOutlineIcon className="!text-[16px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ESCROW & ORDERS */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Escrow Transaction Ledger</h3>
                  <p className="text-xs text-gray-500">
                    Live record of customer acquisitions, cold quarantine locks, and seller payouts.
                  </p>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  48-Hour Inspection Quarantine Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase font-bold text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Order ID & Date</th>
                      <th className="py-3.5 px-4">Buyer Email</th>
                      <th className="py-3.5 px-4">Asset Acquired</th>
                      <th className="py-3.5 px-4">Amount</th>
                      <th className="py-3.5 px-4">Payment Method</th>
                      <th className="py-3.5 px-4">Escrow Status</th>
                      <th className="py-3.5 px-4 text-right">Admin Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.map((o) => (
                      <tr key={o.orderId} className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-4 font-mono">
                          <span className="font-bold text-gray-900 block">{o.orderId}</span>
                          <span className="text-[10px] text-gray-400">
                            {new Date(o.timestamp).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium text-gray-700">{o.email}</td>
                        <td className="py-4 px-4 font-semibold text-gray-900">
                          {o.account?.title || "Reddit Profile"}
                        </td>
                        <td className="py-4 px-4 font-black text-gray-950 text-sm">
                          ${o.subtotal.toFixed(2)}
                        </td>
                        <td className="py-4 px-4 text-gray-500">{o.paymentMethod || "Credit Card"}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1 border ${
                              o.status === "released"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : o.status === "disputed"
                                ? "bg-red-50 text-red-700 border-red-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                o.status === "released"
                                  ? "bg-emerald-500"
                                  : o.status === "disputed"
                                  ? "bg-red-500"
                                  : "bg-amber-500 animate-pulse"
                              }`}
                            />
                            {o.status?.toUpperCase() || "LOCKED"}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {o.status !== "released" && (
                              <button
                                onClick={() => updateOrderStatus(o.orderId, "released")}
                                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[10px] transition-colors cursor-pointer"
                              >
                                Release Escrow
                              </button>
                            )}
                            {o.status !== "disputed" && (
                              <button
                                onClick={() => updateOrderStatus(o.orderId, "disputed")}
                                className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-lg text-[10px] border border-red-200 transition-colors cursor-pointer"
                              >
                                Freeze / Dispute
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AUDIT LOGS */}
        {activeTab === "logs" && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">Security & Operational Event Feed</h3>
            <div className="space-y-3 font-mono text-xs">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF4500]"></span>
                    <div>
                      <p className="font-semibold text-gray-900">{log.message}</p>
                      <span className="text-[10px] text-gray-400">{log.timestamp}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded-md text-[10px] font-bold uppercase">
                    {log.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PLATFORM SETTINGS */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <LockIcon className="text-[#FF4500] !text-[20px]" />
                Escrow Guarantee Configuration
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Inspection Window Duration</label>
                  <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
                    <option>48 Hours (Standard AccoMarket Policy)</option>
                    <option>72 Hours (VIP Accounts &gt; $500)</option>
                    <option>24 Hours (Fast Clearance)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Automated Dispute Resolution</label>
                  <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                    <span>Auto-refund if shadowban strike detected within 48h</span>
                    <input type="checkbox" defaultChecked className="text-[#FF4500]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <VerifiedUserIcon className="text-green-600 !text-[20px]" />
                Sterile Transfer Node
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Default Transfer Domain</label>
                  <input
                    type="text"
                    defaultValue="sterile-transfer@accomarket.net"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800">
                  <span className="font-bold block mb-0.5">PGP Key Attestation Active</span>
                  <span>All customer vault credentials encrypted with RSA-4096 before transmission.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODAL: CREATE NEW LISTING */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Create New Account Listing</h3>
                <p className="text-xs text-gray-500">
                  Add a verified profile to the live marketplace catalog with instant escrow clearance.
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleCreateListing} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Account Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Authority Tech Veteran"
                    value={newAccForm.title || ""}
                    onChange={(e) => setNewAccForm({ ...newAccForm, title: e.target.value })}
                    required
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Price (USD)</label>
                  <input
                    type="number"
                    step="1"
                    value={newAccForm.price || 99}
                    onChange={(e) => setNewAccForm({ ...newAccForm, price: Number(e.target.value) })}
                    required
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Total Karma</label>
                  <input
                    type="number"
                    value={newAccForm.totalKarma || 15000}
                    onChange={(e) =>
                      setNewAccForm({ ...newAccForm, totalKarma: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Account Age (Years)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newAccForm.ageYears || 2.5}
                    onChange={(e) =>
                      setNewAccForm({ ...newAccForm, ageYears: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Available Stock Units</label>
                  <input
                    type="number"
                    value={newAccForm.stock || 1}
                    onChange={(e) => setNewAccForm({ ...newAccForm, stock: Number(e.target.value) })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Vault Reddit Username</label>
                  <input
                    type="text"
                    value={newAccForm.vaultUsername || ""}
                    onChange={(e) => setNewAccForm({ ...newAccForm, vaultUsername: e.target.value })}
                    placeholder="u/organic_curator"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500] font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Master Password Passkey</label>
                  <input
                    type="text"
                    value={newAccForm.vaultPasskey || ""}
                    onChange={(e) => setNewAccForm({ ...newAccForm, vaultPasskey: e.target.value })}
                    placeholder="Karm@Hub#Pass2026!"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Original Sterile Email</label>
                  <input
                    type="email"
                    value={newAccForm.vaultEmail || ""}
                    onChange={(e) => setNewAccForm({ ...newAccForm, vaultEmail: e.target.value })}
                    placeholder="sterile.node@accomarket.net"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#FF4500]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Badge Type</label>
                  <select
                    value={newAccForm.badgeType || "verified"}
                    onChange={(e) =>
                      setNewAccForm({
                        ...newAccForm,
                        badgeType: e.target.value as "verified" | "best-value",
                        badge: e.target.value === "best-value" ? "Best Value" : "Verified",
                      })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                  >
                    <option value="verified">Verified Profile</option>
                    <option value="best-value">Best Value Deal</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold transition-all shadow-xs cursor-pointer"
                >
                  Publish to Storefront
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT LISTING */}
      {editingAccount && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Edit Listing Details</h3>
                <p className="text-xs text-gray-500 font-mono">{editingAccount.id}</p>
              </div>
              <button
                onClick={() => setEditingAccount(null)}
                className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleUpdateListing} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Title</label>
                <input
                  type="text"
                  value={editingAccount.title}
                  onChange={(e) => setEditingAccount({ ...editingAccount, title: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Price (USD)</label>
                  <input
                    type="number"
                    value={editingAccount.price}
                    onChange={(e) =>
                      setEditingAccount({ ...editingAccount, price: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Stock</label>
                  <input
                    type="number"
                    value={editingAccount.stock}
                    onChange={(e) =>
                      setEditingAccount({ ...editingAccount, stock: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl font-bold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Total Karma</label>
                  <input
                    type="number"
                    value={editingAccount.totalKarma}
                    onChange={(e) =>
                      setEditingAccount({ ...editingAccount, totalKarma: Number(e.target.value) })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Badge Type</label>
                  <select
                    value={editingAccount.badgeType}
                    onChange={(e) =>
                      setEditingAccount({
                        ...editingAccount,
                        badgeType: e.target.value as "verified" | "best-value",
                        badge: e.target.value === "best-value" ? "Best Value" : "Verified",
                      })
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                  >
                    <option value="verified">Verified Profile</option>
                    <option value="best-value">Best Value Deal</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingAccount(null)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold cursor-pointer shadow-xs"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
