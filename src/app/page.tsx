import React from "react";
import Image from "next/image";

import commonStyles from "./common.module.scss";
import styles from "./styles.module.scss";

import { Header } from "../components/header/header.tsx";
import { Footer } from "../components/footer/footer.tsx";

const Home: React.FC = () => {
  return (
    <div className={commonStyles.page}>
      <Header />
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={"/logo.svg"}
          alt="Murakami Lab Logo"
          width={200}
          height={100}
        />
        <section>
          <div>Welcome to</div>
          <h1 className={styles.title}>Murakami Lab</h1>
          <div>@ ICHINOSEKI-KOSEN</div>
          <p>Data Science and Soft Computing Laboratory</p>
        </section>
        <section className={commonStyles.section}>
          <h2>Laboratory Theme</h2>
          <p>
            Wide-ranging research in the fields of machine learning and deep
            learning and their implementation in society.
          </p>
        </section>
        <section className={commonStyles.section}>
          <h2>Research Topics</h2>
          <ul className={styles.researchList}>
            <li>
              Natural Language Processing (NLP)
              <ul>
                <li>Large Language Models (LLM)</li>
                <li>Application Development with LLM</li>
                <li>Topic Modeling</li>
              </ul>
            </li>
            <li>Data Mining</li>
            <li>Robotics and Reinforcement Learning (RL)</li>
            <li>Video Processing</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
