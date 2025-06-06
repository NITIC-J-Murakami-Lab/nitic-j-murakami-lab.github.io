import React from "react";
import { footer, footerText } from "./styles.css.ts";

export const Footer: React.FC = () => {
  return (
    <footer className={footer}>
      <span className={footerText}>
        NITIC Joho-Software Murakami Laboratory @ {new Date().getFullYear()}
      </span>
    </footer>
  );
};
