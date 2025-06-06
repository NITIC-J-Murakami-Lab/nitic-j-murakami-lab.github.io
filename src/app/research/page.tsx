import React from "react";
import type { Metadata } from "next";
import { container } from "./styles.css.ts";

export const metadata: Metadata = {
  title: "Murakami Lab - Research",
  description: "Research introductions of Murakami Lab",
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"></div>
  );
};

export default Home;
