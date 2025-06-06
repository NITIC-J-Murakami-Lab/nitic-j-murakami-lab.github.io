import React from "react";
import Image from "next/image";

import { page } from "./common.css.ts";
import { main, section, researchList, logo } from "./styles.css.ts";

import { Header } from "../components/header/header.tsx";
import { Footer } from "../components/footer/footer.tsx";

const Home: React.FC = () => {
  return (
    <div className={page}>
      <Header />
      <main className={main}>
        <Image
          className={logo}
          src={"/logo.svg"}
          alt="Murakami Lab Logo"
          width={200}
          height={100}
        />
        <h1>Welcome to Murakami Lab</h1>
        <p>Data Science and AI Research Laboratory</p>
        <section className={section}>
          <h2>Laboratory Theme</h2>
          <p>
            Wide-ranging research in the fields of machine learning and deep
            learning and their implementation in society.
          </p>
        </section>
        <section className={section}>
          <h2>Research Topics</h2>
          <ul className={researchList}>
            <li>Natural Language Processing (NLP)</li>
            <li>Topic Modeling</li>
            <li>Large Language Models (LLM)</li>
            <li>Robotics and Reinforcement Learning (RL)</li>
            <li>Application Development with LLM</li>
            <li>Voice Sound Synthesis</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
