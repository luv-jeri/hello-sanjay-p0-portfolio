"use client";
import React, { SVGProps, useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

const BANNER_STORAGE_KEY = "sticky-banner-dismissed";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
  autoHideAfter,
  persistDismissal = true,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
  autoHideAfter?: number;
  persistDismissal?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Check localStorage on mount
  useEffect(() => {
    if (persistDismissal) {
      const isDismissed = localStorage.getItem(BANNER_STORAGE_KEY);
      if (!isDismissed) {
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, [persistDismissal]);

  // Auto-hide timer
  useEffect(() => {
    if (autoHideAfter && open) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideAfter);

      return () => clearTimeout(timer);
    }
  }, [autoHideAfter, open]);

  const handleClose = () => {
    setOpen(false);
    if (persistDismissal) {
      localStorage.setItem(BANNER_STORAGE_KEY, "true");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40 && open) {
      handleClose();
    }
  });

  return (
    <motion.div
      className="fixed top-16 md:top-20 left-1/2 z-[100] -translate-x-1/2 px-4"
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
        scale: open ? 1 : 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <div className="relative">
        {/* Animated gradient border glow */}
        <div
          className="absolute -inset-[1.5px] rounded-full opacity-40 blur-sm"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            backgroundSize: '200% 200%',
            animation: 'gradient 6s ease infinite',
          }}
        />

        {/* Inner gradient border (sharper) */}
        <div
          className="absolute -inset-[0.5px] rounded-full opacity-60"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            backgroundSize: '200% 200%',
            animation: 'gradient 6s ease infinite',
          }}
        />

        {/* Content */}
        <div
          className={cn(
            "relative flex items-center gap-2 md:gap-3 rounded-full bg-background px-3 py-2 md:px-5 md:py-3 shadow-lg backdrop-blur-md max-w-[calc(100vw-2rem)]",
            className,
          )}
        >
          {children}

          <motion.button
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-1 md:ml-2 cursor-pointer rounded-full p-1 md:p-1.5 transition-colors hover:bg-muted/80"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <CloseIcon className="h-3 w-3 md:h-3.5 md:w-3.5 text-foreground/60" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
