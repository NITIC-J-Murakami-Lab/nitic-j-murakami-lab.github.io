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
        <p>〒021-0902 岩手県一関市萩荘高梨南方 電気情報工学科棟</p>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d525.1954729996677!2d141.10756611564318!3d38.92472781384536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m4!2z6Zu75rCX5oOF5aCx5bel5a2m56eR5qOf!3m2!1d38.9249807!2d141.10783419999999!4m0!5e0!3m2!1sja!2sjp!4v1749266417789!5m2!1sja!2sjp"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading={"lazy"}
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
