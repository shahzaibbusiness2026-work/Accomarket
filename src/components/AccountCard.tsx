"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Account } from "@/types";
import { useCart } from "@/context/CartContext";
import CardBanner from "./CardBanner";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const isPremium = account.badgeType === "premium";

  // Formatter helpers
  const formatCompact = (num?: number) => {
    if (!num) return "0";
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toLocaleString();
  };

  const ageDisplayStr = account.ageYears ? `${account.ageYears} yrs` : account.ageDisplay;
  const karmaDisplayStr = formatCompact(account.totalKarma);
  const postsDisplayStr = formatCompact(account.postsCount);
  const commentsDisplayStr = formatCompact(account.commentsCount);

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      {/* Top Banner with overlay badges & like button */}
      <div className="relative w-full">
        <CardBanner theme={account.bannerTheme || "volcano"} />

        {/* Top Badges & Heart Action */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {isPremium ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-bold shadow-sm">
              <span>👑</span>
              <span>Premium</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[11px] font-bold shadow-sm">
              <span>✓</span>
              <span>Verified</span>
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-sm"
            title={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            {isLiked ? (
              <FavoriteIcon className="!text-[17px] text-red-500" />
            ) : (
              <FavoriteBorderIcon className="!text-[17px]" />
            )}
          </button>
        </div>
      </div>

      {/* Overlapping Avatar with Reddit Snoo Face */}
      <div className="-mt-7 ml-5 relative z-10 w-14 h-14 rounded-2xl bg-[#FF4500] border-4 border-white shadow-md flex items-center justify-center shrink-0">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <circle cx="12" cy="13.5" r="7.2" />
          <circle cx="5.2" cy="12" r="2.2" />
          <circle cx="18.8" cy="12" r="2.2" />
          {/* Antenna */}
          <path
            d="M12 6.3V3.6M12 3.6L14.6 4.6"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="14.6" cy="4.6" r="1.2" fill="white" />
          {/* Eyes */}
          <circle cx="9.6" cy="13" r="1.3" fill="#FF4500" />
          <circle cx="14.4" cy="13" r="1.3" fill="#FF4500" />
          {/* Smile */}
          <path
            d="M9.8 16.2C10.5 17.2 13.5 17.2 14.2 16.2"
            stroke="#FF4500"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Card Content */}
      <div className="px-5 pt-2.5 pb-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Title & Subreddit Row */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#FF4500] transition-colors leading-snug line-clamp-1">
              {account.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mt-1">
              <svg
                className="w-3.5 h-3.5 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span>
                {account.subreddit || "u/AskReddit"} • {account.ageYears ? `${account.ageYears} years` : account.ageDisplay} old
              </span>
            </div>
          </div>

          {/* 4-Metric Pill Box */}
          <div className="bg-gray-50/90 border border-gray-100 rounded-xl py-2.5 px-2 grid grid-cols-4 divide-x divide-gray-200/80 text-center">
            {/* Age */}
            <div className="px-1">
              <div className="flex items-center justify-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                <CalendarTodayOutlinedIcon className="!text-[11px]" />
                <span>Age</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-gray-900">
                {ageDisplayStr}
              </div>
            </div>

            {/* Total Karma */}
            <div className="px-1">
              <div className="flex items-center justify-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                <StarBorderRoundedIcon className="!text-[12px] text-amber-500" />
                <span>Karma</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-gray-900">
                {karmaDisplayStr}
              </div>
            </div>

            {/* Posts */}
            <div className="px-1">
              <div className="flex items-center justify-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                <InsertDriveFileOutlinedIcon className="!text-[11px]" />
                <span>Posts</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-gray-900">
                {postsDisplayStr}
              </div>
            </div>

            {/* Comments */}
            <div className="px-1">
              <div className="flex items-center justify-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                <ChatBubbleOutlineRoundedIcon className="!text-[11px]" />
                <span>Comments</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-gray-900">
                {commentsDisplayStr}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 min-h-[34px]">
            {account.description ||
              "Well-established account with high karma and clean history. Perfect for marketing, promotion or business use."}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 mt-2 border-t border-gray-100/80 flex items-center justify-between gap-2">
          <div className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
            ${account.price.toFixed(2)}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => addToCart(account.id)}
              className="w-10 h-10 rounded-xl border border-gray-200 hover:border-[#FF4500] hover:bg-orange-50/50 text-gray-700 hover:text-[#FF4500] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              title="Add to Basket"
            >
              <ShoppingCartOutlinedIcon className="!text-[18px]" />
            </button>
            <Link
              href={`/listing?id=${account.id}`}
              className="px-4 py-2.5 bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-bold rounded-xl shadow-2xs hover:shadow transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>View Details</span>
              <ArrowForwardIcon className="!text-[14px]" />
            </Link>
          </div>
        </div>

        {/* Bottom Trust Verification Row */}
        <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <span className="flex items-center gap-1">
            <CheckCircleIcon className="!text-[13px] text-emerald-500" /> Instant Escrow
          </span>
          <span className="flex items-center gap-1">
            <CheckCircleIcon className="!text-[13px] text-emerald-500" /> Verified Seller
          </span>
          <span className="flex items-center gap-1">
            <CheckCircleIcon className="!text-[13px] text-emerald-500" /> 100% Safe
          </span>
        </div>
      </div>
    </div>
  );
}
