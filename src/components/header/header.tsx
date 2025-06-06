"use client";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

import {
  header,
  title,
  nav,
  navList,
  navItem,
  navItemText,
  button,
} from "./styles.css.ts";

type NavItemProps = {
  title: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className={navItem}>
      <span className={navItemText}>{props.title}</span>
    </li>
  );
};

export const Header: React.FC = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={header}>
      <h1 className={title}>Murakami Lab</h1>
      <nav
        className={nav}
        style={{ display: !navVisible && isMobile ? "none" : "block" }}
      >
        <ul className={navList}>
          <NavItem title="Home" href="/" />
          <NavItem title="Research" href="/research" />
          <NavItem title="Publications" href="/publications" />
          <NavItem title="People" href="/people" />
          <NavItem title="Contact" href="/contact" />
        </ul>
      </nav>
      <button className={button} onClick={() => setNavVisible(!navVisible)}>
        <MdMenu size={24} />
      </button>
    </header>
  );
};
