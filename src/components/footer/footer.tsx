import React from "react";

import styles from "./footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        NITIC Joho-Software Murakami Laboratory @ {new Date().getFullYear()}
      </span>
    </footer>
  );
};
