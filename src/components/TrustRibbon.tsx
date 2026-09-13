import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

export default function TrustRibbon() {
  return (
    <div className="bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 shadow-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1: Secure Payments */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/80 flex items-center justify-center text-[#FF4500] shrink-0">
            <LockOutlinedIcon className="!text-[24px]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Secure Payments</div>
            <div className="text-xs text-gray-500">Your money is protected</div>
          </div>
        </div>

        {/* Pillar 2: Verified Sellers */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/80 flex items-center justify-center text-[#FF4500] shrink-0">
            <VerifiedUserOutlinedIcon className="!text-[24px]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Verified Sellers</div>
            <div className="text-xs text-gray-500">Trusted and reliable</div>
          </div>
        </div>

        {/* Pillar 3: Easy Transfers */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/80 flex items-center justify-center text-[#FF4500] shrink-0">
            <BoltIcon className="!text-[24px]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Easy Transfers</div>
            <div className="text-xs text-gray-500">Fast and smooth process</div>
          </div>
        </div>

        {/* Pillar 4: 24/7 Support */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/80 flex items-center justify-center text-[#FF4500] shrink-0">
            <HeadsetMicOutlinedIcon className="!text-[24px]" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">24/7 Support</div>
            <div className="text-xs text-gray-500">We're here to help</div>
          </div>
        </div>

      </div>
    </div>
  );
}
