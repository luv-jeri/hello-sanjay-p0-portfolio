"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        width: scrolled ? "90%" : "100%",
        borderRadius: scrolled ? "9999px" : "0px",
        padding: scrolled ? "0.5rem 1.5rem" : "0.75rem 1.5rem",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mx-auto",
        "border border-transparent bg-background/80 backdrop-blur-md",
        scrolled && "border-border shadow-lg mt-4",
        className
      )}
    >
      {children}
    </motion.nav>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: Array<{ name: string; link: string }>;
  className?: string;
  onItemClick?: () => void;
}) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items.map((item, idx) => (
        <a
          key={`nav-item-${idx}`}
          href={item.link}
          onClick={onItemClick}
          className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("md:hidden w-full", className)}>{children}</div>;
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "overflow-hidden border-t border-border mt-4 pt-4",
            className
          )}
        >
          <div className="flex flex-col gap-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-accent rounded-lg transition-colors"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export const NavbarLogo = ({
  children,
  href = "/",
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  return (
    <a href={href} className={cn("flex items-center space-x-2", className)}>
      {children || (
        <>
          <span className="text-xl font-bold">Logo</span>
        </>
      )}
    </a>
  );
};

export const NavbarButton = ({
  href,
  as = "a",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
  [key: string]: any;
}) => {
  const Component = as;

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    dark: "bg-foreground text-background hover:bg-foreground/90",
    gradient:
      "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground hover:opacity-90",
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg font-medium text-sm transition-all",
        "inline-flex items-center gap-2 justify-center",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
