import React from "react";
import type { Metadata } from "next";

import commonStyles from "../common.module.scss";
import styles from "./styles.module.scss";

import { Header } from "../../components/header/header.tsx";
import { Footer } from "../../components/footer/footer.tsx";

export const metadata: Metadata = {
  title: "Murakami Lab - Access",
  description: "Access page of Murakami Lab",
};

const Home: React.FC = () => {
  return (
    <div className={commonStyles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Access</h1>
        <section className={commonStyles.section}>
          <h2>Map</h2>
          <p className={styles.address}>
            <span>〒021-8511</span>
            <span>岩手県一関市萩荘字高梨</span>
            <span>一関工業高等専門学校 4号棟</span>
          </p>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.9980792616687!2d141.10686696969037!3d38.9241530982324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f88d09d6f0b0357%3A0x7ecc4e362c08f769!2z5LiA6Zai5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1749460177041!5m2!1sja!2sjp"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
          ></iframe>
        </section>
        <section className={commonStyles.section}>
          <h2>Transportation</h2>
          <h3>By Car</h3>
          <p>Take the Ichinoseki IC on the Tohoku Expressway.</p>
          <h3>By Train</h3>
          <p>
            Take the Tohoku Shinkansen to Ichinoseki Station, then take a bus or
            taxi to the college.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
