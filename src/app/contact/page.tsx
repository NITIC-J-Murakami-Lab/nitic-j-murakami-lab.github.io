import React from "react";
import type { Metadata } from "next";

import commonStyles from "../common.module.scss";
import styles from "./styles.module.scss";

import { Header } from "../../components/header/header.tsx";
import { Footer } from "../../components/footer/footer.tsx";

export const metadata: Metadata = {
  title: "Murakami Lab - Contact",
  description: "Contact page of Murakami Lab",
};

const Home: React.FC = () => {
  return (
    <div className={commonStyles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Contacts</h1>
        <section>
          <h2>Contact via college</h2>
          <p>Please refer to the following link.</p>
          <a href="https://www.ichinoseki.ac.jp/techc/summary.html">
            一関工業高等学校 地域共同テクノセンター
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
