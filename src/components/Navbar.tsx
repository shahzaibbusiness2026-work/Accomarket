"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const { cartCount, openCart, showToast } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between gap-4">
        {/* Left: AccoMarket Logo & Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group" aria-label="AccoMarket Home">
            <div className="text-2xl sm:text-[26px] font-black tracking-tight flex items-center">
              <span className="text-gray-950">Acco</span>
              <span className="text-[#FF4500]">Market</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/#featured-listings" className="hover:text-[#FF4500] transition-colors">
              Browse
            </Link>
            <Link href="/#categories" className="hover:text-[#FF4500] transition-colors">
              Categories
            </Link>
            <Link href="/#how-it-works" className="hover:text-[#FF4500] transition-colors">
              How It Works
            </Link>
            <Link href="/#all-accounts" className="hover:text-[#FF4500] transition-colors">
              Inventory
            </Link>
          </nav>
        </div>

        {/* Right: Search, Cart & Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header Search Input */}
          <div className="relative hidden sm:block">
            <label htmlFor="navbar-search" className="sr-only">
              Search accounts
            </label>
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-[19px]" />
            <input
              id="navbar-search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search accounts..."
              className="pl-9 pr-4 py-1.5 w-44 lg:w-56 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#FF4500] focus:bg-white transition-all text-gray-700"
            />
          </div>

          {/* Basket Trigger */}
          <button
            onClick={openCart}
            aria-label={`View Basket with ${cartCount} items`}
            className="relative p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors flex items-center cursor-pointer"
            title="View Basket"
          >
            <ShoppingBagOutlinedIcon className="!text-[22px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF4500] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin Dashboard Portal Button */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border border-gray-200 gap-1.5"
            title="Open Admin Dashboard"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4500]"></span>
            <span>Admin</span>
          </Link>

          {/* Log In Button */}
          <button
            onClick={() => showToast("Authentication pre-configured for live demo", "info")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors cursor-pointer"
          >
            Log In
          </button>

          {/* Sign Up / Checkout Button */}
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#FF4500] hover:bg-[#E03D00] rounded-lg shadow-xs transition-all hover:shadow"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="relative mb-3">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-[19px]" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search accounts..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF4500]"
            />
          </div>
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-gray-700">
            <Link
              href="/#featured-listings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Browse
            </Link>
            <Link
              href="/#categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Categories
            </Link>
            <Link
              href="/#all-accounts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              All Accounts
            </Link>
            <Link
              href="/vault"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50 text-[#FF4500]"
            >
              Decrypted Vault
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
