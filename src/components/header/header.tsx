"use client";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

import styles from "./header.module.scss";

type NavItemProps = {
  title: string;
  href: string;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className={styles.navItem}>
      <a href={props.href} className={styles.navItem}>
        <span className={styles.navItemText}>{props.title}</span>
      </a>
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
    <header className={styles.header}>
      <h1 className={styles.title}>Murakami Lab</h1>
      <nav
        className={styles.nav}
        style={{ display: !navVisible && isMobile ? "none" : "block" }}
      >
        <ul className={styles.navList}>
          <NavItem title="Home" href="/" />
          <NavItem title="Research" href="/research" />
          <NavItem title="Member" href="/member" />
          <NavItem title="Contact" href="/contact" />
        </ul>
      </nav>
      <button
        className={styles.button}
        onClick={() => setNavVisible(!navVisible)}
      >
        <MdMenu size={24} />
      </button>
    </header>
  );
};
