"use client";
import React from "react";
import { cn } from "@/lib/utils";

const FocusCard = React.memo(
  ({
    data,
  }: {
    data: any;
  }) => {
    const [hovered, setHovered] = React.useState<boolean | null>(null);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          !hovered && "blur-sm scale-[0.98]",
        )}
      >
        <img
          src={data.src}
          alt={data.title}
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 whitespace-pre-wrap">
            {data.title}
          </div>
        </div>
      </div>
    );
  },
);
FocusCard.displayName = "FocusCard";

export default FocusCard;
