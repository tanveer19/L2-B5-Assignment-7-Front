"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { useSession, signOut } from "next-auth/react"; // 🔑

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession(); // 🔑 session info

  const commonLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  // Auth-based links
  const authLinks = session
    ? [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Logout", href: "#" },
      ]
    : [{ name: "Login", href: "/login" }];

  const links = [...commonLinks, ...authLinks];

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Next Portfolio
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {links.map((link) =>
              link.name === "Logout" ? (
                <NavigationMenuItem key="logout">
                  <Button
                    variant="ghost"
                    className="hover:text-blue-400 text-black bg-white"
                    onClick={() => signOut()} // 🔑 logout
                  >
                    Logout
                  </Button>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={link.href} className="hover:text-blue-400">
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <div className="flex flex-col space-y-6 mt-6">
                {links.map((link) =>
                  link.name === "Logout" ? (
                    <button
                      key="logout"
                      onClick={() => {
                        signOut();
                        setOpen(false);
                      }}
                      className="text-lg hover:text-blue-400 text-left"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
