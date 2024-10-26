"use client";
import { cn } from "@lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface TimelineProps {
  children: React.ReactNode;
  header?: {
    title: string;
    description?: string;
  };
  className?: string;
}

const Timeline = (
  { children, className, header }: TimelineProps,
) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn(
        "w-full font-sans md:px-10",
        className,
      )}
      ref={containerRef}
    >
      {/* Can be reusable in the future when needs arrives */}
      {header && (
        <header className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl m{b-4 max-w-4xl">
            {header?.title}
          </h2>

          {header?.description && (
            <p className="text-sm md:text-base max-w-sm">
              {header?.description}
            </p>
          )}
        </header>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {children}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline