import React from "react";
import Link from "next/link";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/80 mt-16 py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="text-xl font-black tracking-tight">
              <span className="text-gray-950">Acco</span>
              <span className="text-[#FF4500]">Market</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              The trusted digital marketplace for verified high-authority social media assets and Reddit profiles. Protected by automated escrow.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Marketplace
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <Link href="/#featured-listings" className="hover:text-[#FF4500]">
                  Featured Accounts
                </Link>
              </li>
              <li>
                <Link href="/#all-accounts" className="hover:text-[#FF4500]">
                  All Inventory
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-[#FF4500]">
                  Escrow Checkout
                </Link>
              </li>
              <li>
                <Link href="/vault" className="hover:text-[#FF4500]">
                  Digital Vault
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Platforms
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#FF4500]">
                  Reddit Accounts (1,200+)
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FF4500]">
                  Instagram Profiles (800+)
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FF4500]">
                  X / Twitter Handles (600+)
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FF4500]">
                  TikTok Channels (450+)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Escrow Security
            </h4>
            <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs space-y-1 text-gray-600">
              <div className="flex items-center gap-1.5 text-green-600 font-semibold">
                <VerifiedUserIcon className="!text-[16px]" />
                <span>100% Escrow Guarantee</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight">
                All assets held in cold quarantine until buyer inspection approval.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div>© 2026 AccoMarket. All rights reserved. Fast, secure, verified account transfers.</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-gray-600">Terms of Service</Link>
            <Link href="/" className="hover:text-gray-600">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-600">Dispute Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
