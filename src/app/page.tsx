"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import StatsRibbon from "@/components/StatsRibbon";
import FeaturedAccounts from "@/components/FeaturedAccounts";
import TrustRibbon from "@/components/TrustRibbon";
import Footer from "@/components/Footer";
import { KARMA_ACCOUNTS } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function HomePage() {
  const { addToCart, accounts } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState("reddit");
  const [sortBy, setSortBy] = useState("default");

  const filteredAccounts = useMemo(() => {
    let list = [...accounts];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (acc) =>
          acc.title.toLowerCase().includes(q) ||
          acc.subtitle.toLowerCase().includes(q) ||
          acc.id.toLowerCase().includes(q) ||
          acc.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Filter by tag
    if (selectedTag) {
      list = list.filter((acc) => {
        if (selectedTag === "1+ Year") return acc.ageYears >= 1.0;
        if (selectedTag === "10K+ Karma") return acc.totalKarma >= 10000;
        if (selectedTag === "Verified Email")
          return acc.emailStatus.includes("Transferable") || acc.emailStatus.includes("Clean");
        if (selectedTag === "Active")
          return acc.tags.includes("Active") || acc.commentsCount > 1000;
        if (selectedTag === "Low Price") return acc.price <= 100;
        return true;
      });
    }

    // Sorting
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "karma-desc") list.sort((a, b) => b.totalKarma - a.totalKarma);
    else if (sortBy === "age-desc") list.sort((a, b) => b.ageYears - a.ageYears);

    return list;
  }, [searchQuery, selectedTag, sortBy]);

  const handleTagToggle = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      document.getElementById("all-accounts")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    document.getElementById("all-accounts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar onSearch={(q) => setSearchQuery(q)} />

      {/* Hero Section */}
      <Hero
        onSearch={handleHeroSearch}
        onTagSelect={handleTagToggle}
        activeTag={selectedTag}
      />

      {/* Main Container */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10 flex-1">
        
        {/* Category Tabs (Row of 6 Platforms) */}
        <CategoryTabs
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
        />

        {/* Platform Statistics Ribbon */}
        <StatsRibbon />

        {/* Featured Reddit Accounts (4 Mockup Cards) */}
        <FeaturedAccounts accounts={accounts} />

        {/* Bottom Trust & Security Features Ribbon */}
        <TrustRibbon />

        {/* Dynamic Filterable Catalog */}
        <div id="all-accounts" className="space-y-6 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">All Verified Accounts</h2>
              <p className="text-xs text-gray-500">
                Browse complete stock with instant automated escrow handoff.
              </p>
            </div>

            {/* Sorting & Filter Badge */}
            <div className="flex items-center gap-3">
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs px-2.5 py-1 bg-orange-50 text-[#FF4500] font-medium rounded-full border border-orange-200 cursor-pointer"
                >
                  Filter: {selectedTag} ✕
                </button>
              )}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#FF4500] cursor-pointer"
              >
                <option value="default">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="karma-desc">Karma: Highest First</option>
                <option value="age-desc">Age: Oldest First</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredAccounts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-100">
              <SearchOffIcon className="!text-[48px] text-gray-300 mb-2" />
              <p className="font-semibold text-gray-700">No matching accounts found</p>
              <p className="text-xs mt-1">Try clearing your search query or selecting another tag.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="mt-4 px-4 py-2 bg-[#FF4500] text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredAccounts.map((acc) => (
                <div
                  key={acc.id}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-[#FF4500] flex items-center justify-center font-bold text-xs">
                          <SmartToyIcon className="!text-[18px]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900">{acc.title}</h4>
                          <p className="text-[11px] text-gray-400 font-mono">{acc.id}</p>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                          acc.badgeType === "best-value"
                            ? "text-blue-700 bg-blue-50 border-blue-200"
                            : "text-green-700 bg-green-50 border-green-200"
                        }`}
                      >
                        {acc.badge}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">{acc.subtitle}</p>

                    <div className="grid grid-cols-2 gap-2 bg-gray-50/70 p-2.5 rounded-xl text-xs">
                      <div>
                        <span className="text-gray-400 block text-[10px]">Age</span>
                        <span className="font-bold text-gray-800">{acc.ageDisplay}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Total Karma</span>
                        <span className="font-bold text-gray-800">{acc.totalKarmaDisplay}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Posts</span>
                        <span className="font-bold text-gray-800">{acc.postsCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px]">Comments</span>
                        <span className="font-bold text-gray-800">{acc.commentsCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-gray-400 block">Instant Escrow</span>
                      <span className="text-xl font-black text-gray-900">
                        ${acc.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => addToCart(acc.id)}
                        className="p-2 text-gray-600 hover:text-[#FF4500] hover:bg-orange-50 rounded-lg border border-gray-200 transition-colors cursor-pointer"
                        title="Add to Basket"
                      >
                        <AddShoppingCartIcon className="!text-[18px]" />
                      </button>
                      <Link
                        href={`/listing?id=${acc.id}`}
                        className="px-3.5 py-2 bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
