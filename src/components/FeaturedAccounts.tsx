"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Account } from "@/types";
import AccountCard from "./AccountCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface FeaturedAccountsProps {
  accounts: Account[];
}

export default function FeaturedAccounts({ accounts }: FeaturedAccountsProps) {
  const [sortOption, setSortOption] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Show 6 accounts matching mockup
  const sortedAccounts = useMemo(() => {
    const list = [...accounts.slice(0, 6)];
    if (sortOption === "featured") {
      return list; // Preserves exact mockup order 1 -> 6
    }
    if (sortOption === "newest") {
      return list.sort((a, b) => (b.ageYears || 0) - (a.ageYears || 0));
    }
    if (sortOption === "price-low") {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortOption === "price-high") {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortOption === "karma-high") {
      return list.sort((a, b) => (b.totalKarma || 0) - (a.totalKarma || 0));
    }
    return list;
  }, [accounts, sortOption]);

  return (
    <div id="featured-listings" className="space-y-5 pt-2">
      {/* Section Header Title & View All Link */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
            Featured Reddit Accounts
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Hand-curated, vetted aged profiles with clean reputations and verified metrics.
          </p>
        </div>
        <Link
          href="#all-accounts"
          className="text-xs sm:text-sm font-bold text-[#FF4500] hover:text-[#E03D00] flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <ArrowForwardIcon className="!text-[16px]" />
        </Link>
      </div>

      {/* Subheader Toolbar matching mockup: "Showing 6 accounts" | Sort dropdown | Grid/List toggle */}
      <div className="bg-white border border-gray-200/80 rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
        {/* Left: Accounts Count with Grid icon */}
        <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
          <GridViewRoundedIcon className="!text-[18px] text-[#FF4500]" />
          <span>Showing {sortedAccounts.length} accounts</span>
        </div>

        {/* Right: Sort Pill + Grid/List View Toggles */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative inline-flex items-center">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-gray-50 hover:bg-gray-100/80 border border-gray-200 text-xs font-semibold text-gray-700 py-2 pl-3.5 pr-8 rounded-xl cursor-pointer focus:outline-none focus:border-[#FF4500] transition-colors"
            >
              <option value="featured">Sort by: Newest First</option>
              <option value="karma-high">Sort by: Highest Karma</option>
              <option value="price-low">Sort by: Price: Low to High</option>
              <option value="price-high">Sort by: Price: High to Low</option>
            </select>
            <KeyboardArrowDownIcon className="!text-[18px] text-gray-500 absolute right-2 pointer-events-none" />
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center bg-gray-100 p-1 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#FF4500] text-white shadow-2xs"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              title="Grid View"
            >
              <GridViewRoundedIcon className="!text-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#FF4500] text-white shadow-2xs"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              title="List View"
            >
              <ViewListRoundedIcon className="!text-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* 6 Cards in 3-column Grid (matching 2x3 layout in mockup) */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "grid grid-cols-1 gap-5"
        }
      >
        {sortedAccounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
}
