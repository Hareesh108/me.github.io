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
import { ThemeToggle } from "../theme";

const MainNav = () => {
  const { scrollY } = useWindowEvent();
  const pathname = usePathname();

  const mainLink = [
    {
      name: "About Me",
      link: "#about-me",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  // const isHome = pathname === "/";
  const stickToTop = scrollY > 50;

  return (
    <div>
      <Image
        src="/assets/home-left.svg"
        width={350}
        height={350}
        alt="left img"
        className="left-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px]"
      />
      <Image
        src="/assets/home-right.svg"
        width={350}
        height={350}
        alt="left img"
        className="right-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px]"
      />
      <div
        className={cn(
          `w-full max-w-screen-xl mx-auto flex justify-between items-center fixed z-[40] bg-opacity-80 py-4 top-0 md:top-5 left-0 md:left-1 right-0 md:right-1`,
          "transition-all duration-100 ease-out",
          stickToTop
            ? "drop-shadow-lg justify-end border-2 md:rounded-xl"
            : "justify-end",
          stickToTop ? "bg-inherit" : undefined
        )}
        style={{
          backgroundColor: stickToTop
            ? "hsl(var(--background) / 0.5)"
            : "inherit",
        }}
      >
        <div className={cn(`flex-grow pl-3`)}>
          <Link href="/" passHref>
            <h1 className="text-2xl font-bold">Hareesh Bhittam</h1>
          </Link>
        </div>

        <NavigationMenu>
          <div className="hidden md:block">
            {/* Above medium size */}
            <NavigationMenuList>
              {mainLink.map(({ name, link }) => (
                <NavigationMenuItem key={name + link}>
                  <Link href={link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(pathname === link),
                        "xs:hidden  text-[1.2em] ",
                        "lg:block text-[1.2em] font-bold"
                      )}
                    >
                      {name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>

          {/* Below medium size */}
          <div className="md:hidden flex flex-row">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger className="mr-4 ">
                <Image
                  src="/assets/navbar.svg"
                  width={35}
                  height={35}
                  alt="navbar logo"
                  className="hover:cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent>
                <NavigationMenuList className="gap-4 mt-8 flex flex-col">
                  {/* Above medium size */}
                  {mainLink.map(({ name, link }) => (
                    <NavigationMenuItem key={name + link}>
                      <Link href={link} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(pathname === link),
                            "xs:block  text-[1.1em]",
                            "lg:hidden text-[1.1em] font-bold"
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
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
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
          <div className="text-sm font-medium leading-none ">{title}</div>
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
