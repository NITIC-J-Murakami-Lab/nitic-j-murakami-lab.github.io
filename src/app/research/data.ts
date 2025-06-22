export type Research = {
  title: string;
  authors: string[];
  conference: string;
  date: string;
};

export const researchList: Research[] = [
  {
    title:
      "大規模現モデルとモーション生成モデルを組み合わせた会話文からのモーション作成手法の検討",
    authors: ["岩淵 拓", "村上 力"],
    conference:
      "令和7年東北地区若手研究者研究発表会「音・光・電波・エネルギー・システムとその応用」211-212",
    date: "2025年3月8日",
  },
  {
    title: "時系列基盤モデルを用いた時系列波形予測の評価とその課題",
    authors: ["佐藤 颯", "村上 力"],
    conference:
      "令和7年東北地区若手研究者研究発表会「音・光・電波・エネルギー・システムとその応用」209-210",
    date: "2025年3月8日",
  },
  {
    title: "伝統芸能データセットによる姿勢推定モデルの微調整とその評価",
    authors: ["佐藤 悠真", "村上 力"],
    conference:
      "令和7年東北地区若手研究者研究発表会「音・光・電波・エネルギー・システムとその応用」71-72",
    date: "2025年3月8日",
  },
  {
    title: "LSTM, ESNによる家庭毎電力消費予測",
    authors: ["千田 翔太", "川合 勇輔", "村上 力"],
    conference:
      "令和6年東北・北海道地区高等専門学校専攻科 産学連携シンポジウム",
    date: "2024年11月",
  },
  {
    title: "伝統芸能アーカイブに向けた姿勢推定手法の検討とデータセットの構築",
    authors: ["佐藤 悠真", "村上 力"],
    conference:
      "令和6年東北・北海道地区高等専門学校専攻科 産学連携シンポジウム",
    date: "2024年11月",
  },
  {
    title: "Reservoir Computingを用いた深層学習の効率化と光学文字認識への実装",
    authors: ["山崎 涼健", "村上 力"],
    conference: "2024年度 電気関係学会東北支部連合大会 講演論文集",
    date: "2024年8月",
  },
  {
    title: "枝刈りと知識蒸留を用いたEnd-to-End音声合成モデルの推論高速化",
    authors: ["菅原 雅浩", "村上 力"],
    conference: "2024年度 電気関係学会東北支部連合大会 講演論文集",
    date: "2024年8月",
  },
  {
    title: "Filtering Relevant Comments in Social Media using Deep Learning",
    authors: ["David Ramamonjisoa", "Hidemaru Ikuma", "Riki Murakami"],
    conference:
      "The 2022 IEEE/WIC/ACM International Conference on Web Intelligence and Intelligent Agent Technology (WI-IAT'22)",
    date: "2022年11月",
  },
];
