"use client";

import React from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Who are We ?", href: "/abouts" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname(); // 2. Get current path

  return (
    <header className="w-full border-b bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="text-2xl font-bold text-blue-600">
          Digit<span className="text-black">UX</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={
                  isActive
                    ? "font-semibold text-black border-b-2 border-blue-600 pb-1"
                    : "text-gray-500 hover:text-black transition"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pt-8 w-3/4">
              <div className="text-2xl font-bold text-blue-600 mb-6">
                Digit<span className="text-black">UX</span>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={
                        isActive
                          ? "font-semibold text-black border-b-2 border-blue-600 pb-1 text-lg"
                          : "text-gray-600 hover:text-black transition text-lg"
                      }
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-8">
                Get a Quote
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
