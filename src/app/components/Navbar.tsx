"use client";

import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed z-50 w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            PORTFOLIO
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Theme Button (after Contact) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-700 md:hidden dark:text-gray-200"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div className="mt-2 space-y-2 md:hidden">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 rounded transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Theme Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <SunIcon className="inline w-5 h-5" />
                ) : (
                  <MoonIcon className="inline w-5 h-5" />
                )}
              </button>
            </div>

            <button
              className="p-2 transition-colors rounded-lg cursor-pointer md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
