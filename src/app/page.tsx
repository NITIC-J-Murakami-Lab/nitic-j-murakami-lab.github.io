import React from "react";

import { main, page } from "./page.css.ts";

import { Header } from "../components/header/header.tsx";
import { Footer } from "../components/footer/footer.tsx";

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
