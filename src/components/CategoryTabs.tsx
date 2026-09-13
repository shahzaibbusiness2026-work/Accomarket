"use client";

import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GridViewIcon from "@mui/icons-material/GridView";
import { useCart } from "@/context/CartContext";

interface CategoryTabsProps {
  selectedPlatform: string;
  onSelectPlatform: (id: string) => void;
}

export default function CategoryTabs({ selectedPlatform, onSelectPlatform }: CategoryTabsProps) {
  const { showToast } = useCart();

  const handleTabClick = (id: string) => {
    onSelectPlatform(id);
    if (id !== "reddit") {
      showToast(`Loading verified ${id.toUpperCase()} accounts... (Catalog in queue)`, "info");
    }
  };

  return (
    <div id="categories" className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        
        {/* Reddit */}
        <button
          onClick={() => handleTabClick("reddit")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "reddit"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-[#FF4500] flex items-center justify-center text-white mb-2 shadow-xs">
            <SmartToyIcon className="!text-[22px]" />
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">Reddit</div>
          <div className="text-xs text-gray-500 mt-0.5">1,200+ accounts</div>
        </button>

        {/* Instagram */}
        <button
          onClick={() => handleTabClick("instagram")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "instagram"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white mb-2 shadow-xs">
            <PhotoCameraIcon className="!text-[22px]" />
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">Instagram</div>
          <div className="text-xs text-gray-500 mt-0.5">800+ accounts</div>
        </button>

        {/* X (Twitter) */}
        <button
          onClick={() => handleTabClick("twitter")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "twitter"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white mb-2 shadow-xs font-bold text-base">
            𝕏
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">X (Twitter)</div>
          <div className="text-xs text-gray-500 mt-0.5">600+ accounts</div>
        </button>

        {/* TikTok */}
        <button
          onClick={() => handleTabClick("tiktok")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "tiktok"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-gray-950 flex items-center justify-center text-white mb-2 shadow-xs">
            <MusicNoteIcon className="!text-[20px] text-cyan-400" />
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">TikTok</div>
          <div className="text-xs text-gray-500 mt-0.5">450+ accounts</div>
        </button>

        {/* YouTube */}
        <button
          onClick={() => handleTabClick("youtube")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "youtube"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white mb-2 shadow-xs">
            <PlayArrowIcon className="!text-[22px]" />
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">YouTube</div>
          <div className="text-xs text-gray-500 mt-0.5">320+ accounts</div>
        </button>

        {/* Other */}
        <button
          onClick={() => handleTabClick("other")}
          className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xs transition-all hover:shadow-md cursor-pointer group ${
            selectedPlatform === "other"
              ? "border-2 border-[#FF4500] bg-[#FFF8F5]"
              : "border border-gray-200 hover:border-gray-300 bg-white"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-2 shadow-xs">
            <GridViewIcon className="!text-[20px]" />
          </div>
          <div className="text-sm font-bold text-gray-900 group-hover:text-[#FF4500]">Other</div>
          <div className="text-xs text-gray-500 mt-0.5">200+ accounts</div>
        </button>

      </div>
    </div>
  );
}
