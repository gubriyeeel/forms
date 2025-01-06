"use client";

import { cn } from "@/lib/utils";
import { CircleCheck, TriangleAlert, X } from "lucide-react";
import { useState } from "react";

type Props = {
  message: string;
  type: "success" | "error";
};

export function FormNotification({ message, type }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const isSuccess = type === "success";

  return (
    <div
      className={cn(
        "w-full flex items-center p-4 rounded-md",
        isSuccess
          ? "text-emerald-500 bg-emerald-50"
          : "text-rose-500 bg-rose-50"
      )}
    >
      {isSuccess ? (
        <CircleCheck size={16} className="mr-2" />
      ) : (
        <TriangleAlert size={16} className="mr-2" />
      )}

      <p className="text-sm">{message}</p>
      <button
        className={cn(
          "ml-auto",
          isSuccess ? "text-emerald-500" : "text-rose-500"
        )}
        onClick={() => setIsVisible(false)}
      >
        <X size={16} />
      </button>
    </div>
  );
}
