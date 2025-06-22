import React from "react";
import type { Metadata } from "next";

import commonStyles from "../common.module.scss";
import styles from "./styles.module.scss";

import { Header } from "../../components/header/header.tsx";
import { Footer } from "../../components/footer/footer.tsx";

import { Research, researchList } from "./data.ts";

export const metadata: Metadata = {
  title: "Murakami Lab - Research",
  description: "Research introductions of Murakami Lab",
};

const ResearchCard: React.FC<Research> = ({
  title,
  authors,
  conference,
  date,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.authors}>{authors.join(", ")}</p>
      <p className={styles.conference}>{conference}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className={commonStyles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Research</h1>
        <section className={styles.research}>
          {researchList.map((research, index) => (
            <ResearchCard key={index} {...research} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
