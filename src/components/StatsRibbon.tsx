import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

export default function StatsRibbon() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* Stat 1 */}
        <div className="flex items-center gap-4 pt-2 md:pt-0">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
            <ShoppingCartOutlinedIcon className="!text-[28px]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-gray-900">10,000+</div>
            <div className="text-xs text-gray-500 font-medium">Accounts Listed</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
            <GroupsOutlinedIcon className="!text-[28px]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-gray-900">2,500+</div>
            <div className="text-xs text-gray-500 font-medium">Happy Customers</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
            <VerifiedUserOutlinedIcon className="!text-[28px]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-gray-900">98%</div>
            <div className="text-xs text-gray-500 font-medium">Successful Transfers</div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF4500] shrink-0">
            <ScheduleOutlinedIcon className="!text-[28px]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-gray-900">24/7</div>
            <div className="text-xs text-gray-500 font-medium">Customer Support</div>
          </div>
        </div>

      </div>
    </div>
  );
}
