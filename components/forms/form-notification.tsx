"use client";

import { cn } from "@/lib/utils";
import { TriangleAlert, X } from "lucide-react";
import { useState } from "react";

type Props = {
  message: string;
  type: "success" | "error";
};

export function FormNotification({ message, type }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full flex items-center p-4 rounded-md",
        type === "success"
          ? "text-emerald-500 bg-emerald-50"
          : "text-rose-500 bg-rose-50"
      )}
    >
      <TriangleAlert size={16} className="mr-2" />
      <p className="text-sm">{message}</p>
      <button
        className={cn(
          "ml-auto",
          type === "success" ? "text-emerald-500" : "text-rose-500"
        )}
        onClick={() => setIsVisible(false)}
      >
        <X size={16} />
      </button>
    </div>
  );
}
