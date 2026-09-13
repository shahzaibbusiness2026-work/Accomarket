"use client";

import React from "react";
import Link from "next/link";
import { Account } from "@/types";
import AccountCard from "./AccountCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface FeaturedAccountsProps {
  accounts: Account[];
}

export default function FeaturedAccounts({ accounts }: FeaturedAccountsProps) {
  // Select the top 4 accounts from mockup
  const featured = accounts.slice(0, 4);

  return (
    <div id="featured-listings" className="space-y-6 pt-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          Featured Reddit Accounts
        </h2>
        <Link
          href="#all-accounts"
          className="text-sm font-semibold text-[#FF4500] hover:text-[#E03D00] flex items-center gap-1 transition-colors"
        >
          <span>View All</span>
          <ArrowForwardIcon className="!text-[16px]" />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
}
