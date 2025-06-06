import React from "react";
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
  return (
    <header className={header}>
      <h1 className={title}>Murakami Lab</h1>
      <nav className={nav}>
        <ul className={navList}>
          <NavItem title="Home" href="/" />
          <NavItem title="Research" href="/research" />
          <NavItem title="Publications" href="/publications" />
          <NavItem title="People" href="/people" />
          <NavItem title="Contact" href="/contact" />
        </ul>
      </nav>
      <button className={button}></button>
    </header>
  );
};
