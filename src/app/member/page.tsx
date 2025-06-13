import React from "react";
import type { Metadata } from "next";

import commonStyles from "../common.module.scss";
import styles from "./styles.module.scss";

import { Header } from "../../components/header/header.tsx";
import { Footer } from "../../components/footer/footer.tsx";
import { types } from "util";

export const metadata: Metadata = {
  title: "Murakami Lab - Member",
  description: "Member introductions of Murakami Lab",
};

type Sns = {
  platform: string;
  account: string;
  url: string;
};

const MemberCard: React.FC<{
  name: string;
  keywords: string[];
  sns: Sns[];
}> = ({ name, keywords, sns }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <ul className={styles.keywords}>
        {keywords.map((keyword) => (
          <span key={keyword} className={styles.keyword}>
            {`#${keyword}`}
          </span>
        ))}
      </ul>
      <div className={styles.sns}>
        {sns.map(({ platform, account, url }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${platform}@${account}`}
          </a>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className={commonStyles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Members</h1>
        <p>Members introduction of the Murakami Lab</p>
        <section className={styles.members}>
          <h2>Supervisor</h2>
          <MemberCard
            name="Murakami Riki"
            keywords={["NLP", "Topic Model", "Data Mining"]}
            sns={[
              {
                platform: "researchmap",
                account: "mriki",
                url: "https://researchmap.jp/mriki",
              },
              {
                platform: "GitHub",
                account: "rsimd",
                url: "https://github.com/rsimd",
              },
            ]}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
