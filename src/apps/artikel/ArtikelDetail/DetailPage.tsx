import React from "react";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";
import "./DetailPage.css";

interface DetailPageProps {
  id: string;
  onBack: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ onBack }) => {
  return (
    <div className="detail-wrapper">
      {/* Tombol kembali */}
      <div className="detail-nav">
        <button className="back-btn" onClick={onBack}>
          ← Kembali ke Artikel
        </button>
      </div>

      {/* Header & Konten */}
      <SectionHeader />
      <SectionContent />
    </div>
  );
};

export default DetailPage;
