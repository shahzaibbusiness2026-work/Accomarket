"use client";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

interface HeroProps {
  onSearch: (query: string) => void;
  onTagSelect: (tag: string) => void;
  activeTag: string | null;
}

export default function Hero({ onSearch, onTagSelect, activeTag }: HeroProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const tags = ["1+ Year", "10K+ Karma", "Verified Email", "Active", "Low Price"];

  return (
    <section className="relative overflow-hidden border-b border-orange-100/60 pt-10 pb-16 lg:py-20" style={{ background: "linear-gradient(115deg, #FFF7F3 0%, #FFF2EC 40%, #FFE9DE 100%)" }}>
      {/* Curved Background Ambient Blob */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle at 60% 50%, #FFDFCF 0%, rgba(255,235,225,0) 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow / Tagline */}
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-gray-400 uppercase">
              TRUSTED ACCOUNT MARKETPLACE
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-950 leading-[1.12] tracking-tight">
              Buy & Sell <span className="text-[#FF4500]">Reddit Accounts</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Find high-quality, <span className="font-semibold text-gray-800">verified</span> Reddit accounts with real activity. Fast, secure and easy.
            </p>

            {/* Hero Search Bar */}
            <form onSubmit={handleSearchSubmit} className="pt-2">
              <div className="bg-white rounded-full p-1.5 pl-5 shadow-md border border-gray-200/90 flex items-center gap-3 max-w-xl">
                <SearchIcon className="text-gray-400 !text-[24px]" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search Reddit accounts..."
                  className="w-full bg-transparent border-none text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-7 py-2.5 bg-[#FF4500] hover:bg-[#E03D00] text-white font-semibold rounded-full text-sm sm:text-base transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-gray-500 font-semibold mr-1">Popular:</span>
              {tags.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => onTagSelect(tag)}
                    className={`px-3 py-1 rounded-full font-medium transition-colors shadow-2xs cursor-pointer border ${
                      isActive
                        ? "bg-[#FF4500] text-white border-[#FF4500]"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#FF4500] hover:text-[#FF4500]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Hero Graphic: Snoo Card & 3 Floating Badges */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md flex items-center justify-center py-6">
              
              {/* Central White Card with Reddit Snoo */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-orange-100 flex flex-col items-center justify-center w-64 h-64 sm:w-72 sm:h-72 shrink-0 z-10">
                {/* Snoo Vector SVG */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-3 relative flex items-center justify-center">
                  <svg className="w-full h-full drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="#FF4500" />
                    <path d="M50 32L58 18L68 22" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="69" cy="22" r="5" fill="#FF4500" stroke="white" strokeWidth="3" />
                    <circle cx="23" cy="50" r="10" fill="white" />
                    <circle cx="77" cy="50" r="10" fill="white" />
                    <ellipse cx="50" cy="52" rx="30" ry="24" fill="white" />
                    <circle cx="38" cy="49" r="4.5" fill="#FF4500" />
                    <circle cx="62" cy="49" r="4.5" fill="#FF4500" />
                    <path d="M38 60C42 65 58 65 62 60" stroke="#FF4500" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="text-2xl sm:text-[28px] font-black tracking-tight text-gray-900 font-sans">
                  reddit
                </div>
              </div>

              {/* Floating Benefit 1: Verified Listings */}
              <div className="absolute -top-3 right-0 sm:-right-4 z-20 bg-white rounded-2xl p-3.5 px-4 shadow-lg border border-gray-100 flex items-center gap-3 transition-transform hover:-translate-y-1 duration-200">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
                  <BoltIcon className="!text-[22px]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Verified Listings</div>
                  <div className="text-[11px] text-gray-500">High quality accounts</div>
                </div>
              </div>

              {/* Floating Benefit 2: Secure Payments */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-8 z-20 bg-white rounded-2xl p-3.5 px-4 shadow-lg border border-gray-100 flex items-center gap-3 transition-transform hover:-translate-y-1 duration-200">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
                  <ShieldOutlinedIcon className="!text-[22px]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Secure Payments</div>
                  <div className="text-[11px] text-gray-500">Your purchase is protected</div>
                </div>
              </div>

              {/* Floating Benefit 3: Easy & Fast */}
              <div className="absolute -bottom-3 right-0 sm:-right-4 z-20 bg-white rounded-2xl p-3.5 px-4 shadow-lg border border-gray-100 flex items-center gap-3 transition-transform hover:-translate-y-1 duration-200">
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
                  <GroupsOutlinedIcon className="!text-[22px]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Easy & Fast</div>
                  <div className="text-[11px] text-gray-500">Get your account quickly</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
