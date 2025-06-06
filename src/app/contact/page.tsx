import React from "react";
import type { Metadata } from "next";
import { main } from "./styles.css.ts";
import { page } from "../common.css.ts";

import { Header } from "../../components/header/header.tsx";
import { Footer } from "../../components/footer/footer.tsx";

export const metadata: Metadata = {
  title: "Murakami Lab - Contact",
  description: "Contact page of Murakami Lab",
};

const Home: React.FC = () => {
  return (
    <div className={page}>
      <Header />
      <main className={main}>
        <h1>Welcome to Murakami Lab</h1>
        <p>Exploring the frontiers of science and technology.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
