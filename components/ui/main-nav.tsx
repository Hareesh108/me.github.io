"use client";

// next and react
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { useWindowEvent } from "@/contexts/window-event-provider";

// utils
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";

const MainNav = () => {
  const { scrollY } = useWindowEvent();
  const pathname = usePathname();

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
  ];
  // const isHome = pathname === "/";
  const stickToTop = scrollY > 50;

  return (
    <div
      className={cn(
        `w-full max-w-screen-xl mx-auto flex justify-between items-center  fixed z-[40] bg-opacity-80 py-4 `,
        "transition-all duration-300 ease-out",
        stickToTop
          ? "top-5 left-1 right-1 drop-shadow-lg justify-end border-2 rounded-xl"
          : "top-5 left-1 right-1 justify-end",
        stickToTop ? "bg-accent-light-100 " : undefined
      )}
    >
      <div className={cn(`flex-grow `, stickToTop ? "pl-3" : undefined)}>
        <h1 className="text-2xl font-bold">Hareesh Bhittam</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          {/* Above medium size */}
          {mainLink.map(({ name, link }) => (
            <NavigationMenuItem key={name + link}>
              <Link href={link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(pathname === link),
                    "xs:hidden  text-[1.2em]",
                    "lg:block text-[1.2em]"
                  )}
                >
                  {name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        {/* Below medium size */}
        <div className="lg:hidden ">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/navbar.svg"
                width={41}
                height={41}
                alt="navbar logo"
                className="hover-cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent>
              <NavigationMenuList className="xs:flex-col xs:items-end gap-4 mt-8">
                {/* Above medium size */}
                {mainLink.map(({ name, link }) => (
                  <NavigationMenuItem key={name + link}>
                    <Link href={link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(pathname === link),
                          "xs:block  text-[1.1em]",
                          "lg:hidden text-[1.1em]"
                        )}
                      >
                        <SheetClose>{name}</SheetClose>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

export default MainNav;
