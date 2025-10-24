import React from "react";
import "../artikel.css";

interface Article {
  id: string;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
}

interface CardArtikelProps {
  article: Article;
  onSelect: (id: string) => void;
}

const CardArtikel: React.FC<CardArtikelProps> = ({ article, onSelect }) => {
  return (
    <article className="card-artikel" role="button" tabIndex={0}
      onClick={() => onSelect(article.id)}
      onKeyDown={(e) => { if (e.key === "Enter") onSelect(article.id); }}
    >
      <div className="thumb-wrap">
        <img src={article.image ?? "/assets/artikel/artikel-1.jpg"} alt={article.title} />
      </div>

      <div className="card-body">
        {/* Judul bisa diklik - gunakan onSelect */}
        <h3 className="card-title" onClick={(e) => { e.stopPropagation(); onSelect(article.id); }}>
          {article.title}
        </h3>

        {article.excerpt && <p className="card-excerpt">{article.excerpt}</p>}

        <div className="card-meta">
          <time>{article.date ?? ""}</time>
          <button
            className="read-more"
            onClick={(e) => { e.stopPropagation(); onSelect(article.id); }}
            aria-label={`Baca selengkapnya ${article.title}`}
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardArtikel;
