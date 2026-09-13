import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import ProofModal from "@/components/ProofModal";
import Toast from "@/components/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AccoMarket — Buy & Sell Reddit Accounts | Trusted Account Marketplace",
  description: "Find high-quality, verified Reddit accounts with real activity. Fast, secure and easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-sans bg-white text-gray-800 antialiased min-h-screen flex flex-col">
        <CartProvider>
          {children}
          <CartDrawer />
          <ProofModal />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
