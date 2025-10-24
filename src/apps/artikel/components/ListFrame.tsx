import React from "react";
import CardArtikel from "./CardArtikel";
import Pagination from "./Pagination";
import "../artikel.css";

interface Article {
  id: string;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
}

interface ListFrameProps {
  onSelectArticle: (id: string) => void;
}

const SAMPLE: Article[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `artikel-${i + 1}`,
  title: `Judul Artikel ${i + 1}`,
  excerpt: "Ringkasan singkat artikel biar card keliatan lengkap.",
  date: "24 Oktober 2025",
  image: `/assets/artikel/artikel-${(i % 3) + 1}.jpg`,
}));

const ListFrame: React.FC<ListFrameProps> = ({ onSelectArticle }) => {
  return (
    <>
      <section className="list-frame">
        {SAMPLE.map((article) => (
          <CardArtikel key={article.id} article={article} onSelect={onSelectArticle} />
        ))}
      </section>
      <Pagination /> {/* ← ini bagian yang harusnya muncul di bawah list */}
    </>
  );
};

export default ListFrame;
