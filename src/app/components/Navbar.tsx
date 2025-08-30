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
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
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
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
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
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div className="md:hidden mt-2 space-y-2">
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
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <SunIcon className="w-5 h-5 inline" />
                ) : (
                  <MoonIcon className="w-5 h-5 inline" />
                )}
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
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
