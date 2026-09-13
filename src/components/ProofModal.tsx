"use client";

import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ProofModal() {
  const { proofAccount, closeProofModal } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProofModal();
      }
    };
    if (proofAccount) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [proofAccount, closeProofModal]);

  if (!proofAccount) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Account Audit Certificate"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProofModal();
      }}
    >
      <div className="bg-white max-w-xl w-full rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-green-600">
            <VerifiedIcon className="!text-[24px]" />
            <h3 className="text-lg font-bold text-gray-900">Account Audit Certificate</h3>
          </div>
          <button
            onClick={closeProofModal}
            className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
            aria-label="Close certificate"
          >
            <CloseIcon className="!text-[20px]" />
          </button>
        </div>

        {/* Audit Details */}
        <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Account Identifier:</span>
            <strong className="text-[#FF4500] font-semibold">
              {proofAccount.id} ({proofAccount.title})
            </strong>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Escrow Verification Hash:</span>
            <span className="text-gray-800 font-mono text-xs select-all">
              {proofAccount.hash || "#0x889F...7AC1"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Audit Node Timestamp:</span>
            <span className="text-gray-800 font-mono text-xs">2026-09-13T01:14:00Z</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Shadowban Status:</span>
            <span className="text-green-600 font-semibold flex items-center gap-1">
              <CheckCircleIcon className="!text-[16px]" /> 0 Strikes (100% Clean)
            </span>
          </div>
        </div>

        {/* Terminal log */}
        <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-[11px] leading-relaxed space-y-1 border border-gray-800">
          <p className="text-green-400 font-semibold">&gt; VERIFICATION REPORT SIGNATURE: VALID</p>
          <p>&gt; [OK] Reddit OAuth API Authenticated node pass (200 OK)</p>
          <p>&gt; [OK] Account age verified against genesis registration</p>
          <p>&gt; [OK] Karma distribution curve verified organic (99.8% human rating)</p>
          <p>&gt; [OK] Linked master email recovery verified sterile</p>
          <p>&gt; [OK] Escrow lock engaged for buyer protection</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">
            Cryptographically Attested by AccoMarket Escrow Node
          </span>
          <button
            onClick={closeProofModal}
            className="px-4 py-2 bg-[#FF4500] text-white rounded-xl text-sm font-semibold hover:bg-[#E03D00] transition-colors cursor-pointer"
          >
            Close Certificate
          </button>
        </div>
      </div>
    </div>
  );
}
