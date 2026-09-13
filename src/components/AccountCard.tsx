"use client";

import React from "react";
import Link from "next/link";
import { Account } from "@/types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  const isBestValue = account.badgeType === "best-value";

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* Header: Icon, Title & Status Badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FF4500] flex items-center justify-center text-white shrink-0 shadow-2xs">
              <SmartToyIcon className="!text-[20px]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 leading-snug">
              {account.title}
            </h3>
          </div>

          {/* Badge */}
          {isBestValue ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60 shrink-0">
              <ShieldOutlinedIcon className="!text-[13px]" /> Best Value
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200/60 shrink-0">
              <CheckIcon className="!text-[13px]" /> Verified
            </span>
          )}
        </div>

        {/* Metrics List */}
        <div className="space-y-2.5 text-xs text-gray-600 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <CalendarTodayOutlinedIcon className="!text-[16px]" />
              <span>Age</span>
            </div>
            <span className="font-semibold text-gray-900">{account.ageDisplay}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <StarBorderRoundedIcon className="!text-[16px]" />
              <span>Karma</span>
            </div>
            <span className="font-semibold text-gray-900">{account.totalKarmaDisplay}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <ChatBubbleOutlineRoundedIcon className="!text-[16px]" />
              <span>Posts</span>
            </div>
            <span className="font-semibold text-gray-900">
              {account.postsCount.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-500">
              <ForumOutlinedIcon className="!text-[16px]" />
              <span>Comments</span>
            </div>
            <span className="font-semibold text-gray-900">
              {account.commentsCount.toLocaleString()}
            </span>
          </div>
        </div>

      </div>

      {/* Card Footer: Price & View Details CTA */}
      <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <div className="text-2xl font-black text-gray-950">
          ${Math.round(account.price)}
        </div>
        <Link
          href={`/listing?id=${account.id}`}
          className="px-4 py-2 bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-semibold rounded-lg shadow-2xs transition-all hover:shadow"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
