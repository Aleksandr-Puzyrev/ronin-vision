"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import React, { useState } from "react";
import Logo1 from "../../public/Logo1.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Communication from "./Communications/Communication";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={styles.navbar}>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src={Logo1} alt="Logo" priority={true}/>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="start" className={styles.menu}>
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.label} className={styles.navbarItem}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className={styles.communications}>
        <Communication />
      </NavbarContent>

      <NavbarMenu className={styles.navMenu}>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={item.label} className={styles.navMenuItem}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === siteConfig.navItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <hr className={styles.hr} />
        <Communication />
      </NavbarMenu>

      <NavbarContent className={styles.burger}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
    </Navbar>
  );
}
