"use client";

// next and react
import Link from "next/link";
import React from "react";

// components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// contexts

// utils
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme";

const Navbar = () => {
  const mainLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "/about-me",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex justify-center ">
      <NavigationMenu>
        <NavigationMenuList>
          {mainLink.map(({ name, link }) => (
            <NavigationMenuItem key={name + link}>
              <Link href={link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(undefined),
                    "xs:hidden text-[1.2em]",
                    "lg:block text-[1.2em]"
                  )}
                >
                  {name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
