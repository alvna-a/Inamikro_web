import React, { useState } from "react";
import "./artikel.css";
import HeroFrame from "./components/HeroFrame";
import ListFrame from "./components/ListFrame";
import DetailPage from "./ArtikelDetail/DetailPage";

const Artikel: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="artikel-page">
      {selectedId ? (
        <DetailPage id={selectedId} onBack={() => setSelectedId(null)} />
      ) : (
        <>
          <HeroFrame />
          <ListFrame onSelectArticle={(id) => setSelectedId(id)} />
        </>
      )}
    </div>
  );
};

export default Artikel;
