import { main, page } from "./page.css.ts";

import { Header } from "../components/header/header.tsx";
import { Footer } from "../components/footer/footer.tsx";

export default function Home() {
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
}
