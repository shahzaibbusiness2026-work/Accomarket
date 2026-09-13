"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl font-medium text-sm border border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {isSuccess && <CheckCircleIcon className="text-green-400 !text-[20px]" />}
      {isError && <ErrorIcon className="text-red-400 !text-[20px]" />}
      {!isSuccess && !isError && <InfoIcon className="text-blue-400 !text-[20px]" />}
      <span>{toast.message}</span>
    </div>
  );
}
