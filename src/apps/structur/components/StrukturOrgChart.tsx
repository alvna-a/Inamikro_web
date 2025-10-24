import React from "react";

const OrgBox = ({
  name,
  role,
  highlight = false,
}: {
  name: string;
  role: string;
  highlight?: boolean;
}) => (
  <div
    className={`bg-white ${
      highlight ? "border-[3px]" : "border-2"
    } border-[#F43F5E] rounded-lg px-3 py-2 w-[160px] text-center shadow-sm`}
  >
    <p className="font-semibold text-gray-800 text-xs leading-tight">{name}</p>
    <p className="text-[10px] text-gray-600 mt-0.5">{role}</p>
  </div>
);

const Connector = ({
  orientation = "vertical",
  length = "24px",
  className = "",
  style = {},
}: {
  orientation?: "vertical" | "horizontal";
  length?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const sizeStyle =
    orientation === "vertical" ? { height: length } : { width: length };

  return (
    <div
      className={`${
        orientation === "vertical"
          ? "w-[1.5px] bg-[#F43F5E] mx-auto"
          : "h-[1.5px] bg-[#F43F5E] my-auto"
      } ${className}`}
      style={{ ...sizeStyle, ...style }}
    />
  );
};

const StrukturOrgChart = () => {
  return (
    <section className="py-10 px-3 md:px-6 bg-[#FDE8E8]">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
        Struktur Organisasi
      </h2>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center space-y-4">
        {/* 1. CEO */}
        <div className="flex flex-col items-center">
          <OrgBox name="Debbie R. Sianturi" role="CEO/CFO - Founder" highlight />
          <Connector orientation="vertical" length="28px" />
        </div>

        {/* 2. CTO & Komisaris */}
        <div className="flex justify-center items-center gap-16 relative">
          <OrgBox name="Daniel Setiawan" role="CTO" />
          <OrgBox name="Joshua E. Sianturi" role="Komisaris" />
          <Connector
            orientation="horizontal"
            className="absolute top-1/2 left-[8%] right-[8%]"
          />
        </div>

        <Connector orientation="vertical" length="36px" />

        {/* 3. Garis Utama ke 4 Departemen */}
        <div className="relative w-[90%] flex justify-around items-start mt-2">
          {/* Garis horizontal utama */}
          <Connector orientation="horizontal" length="100%" className="absolute top-0 left-0 right-0" />

          {/* Titik vertikal turun ke tiap departemen */}
          {[
            { left: "13%" }, // Admin HR
            { left: "34%" }, // Finance
            { left: "56%" }, // COO
            { left: "78%" }, // IT Dev
          ].map((pos, i) => (
            <Connector
              key={i}
              orientation="vertical"
              length="28px"
              className="absolute -top-[1px] transform -translate-x-1/2"
              style={{ left: pos.left }}
            />
          ))}
        </div>

        {/* 4. Departemen */}
        <div className="flex justify-around w-[90%] items-start">
          {/* Admin */}
          <div className="flex flex-col items-center">
            <OrgBox name="Sekararum Widyan" role="Admin, HR & Legal" />
            <Connector orientation="vertical" length="20px" />
            <OrgBox name="Rachel Sianipar" role="Admin" />
          </div>

          {/* Finance */}
          <div className="flex flex-col items-center">
            <OrgBox name="Dita Lestari" role="Finance, Admin Staff" />
            <Connector orientation="vertical" length="20px" />
            <OrgBox name="Maulid Nahar" role="Admin" />
          </div>

          {/* COO + Mentor */}
          <div className="flex flex-col items-center">
            <OrgBox name="Yudha Mei L." role="Chief Operating Officer" />
            <Connector orientation="vertical" length="20px" />
            <div className="relative w-[320px] mt-1">
              {/* Bracket kiri-kanan */}
              <div className="absolute -left-6 top-0 bottom-0 w-6">
                <Connector orientation="vertical" length="100%" />
                <Connector orientation="horizontal" length="24px" className="absolute left-0 top-0" />
                <Connector orientation="horizontal" length="24px" className="absolute left-0 bottom-0" />
              </div>
              <div className="absolute -right-6 top-0 bottom-0 w-6">
                <Connector orientation="vertical" length="100%" />
                <Connector orientation="horizontal" length="24px" className="absolute right-0 top-0" />
                <Connector orientation="horizontal" length="24px" className="absolute right-0 bottom-0" />
              </div>

              {/* Grid Mentor */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Johan Simangusong",
                  "Aci",
                  "A. Saefuddin Zuhri",
                  "Elfira Agustina",
                  "Deswita",
                  "Fikri",
                  "Mumun Munawarah",
                  "Rina Sitorus",
                ].map((name) => (
                  <OrgBox key={name} name={name} role="Kakak Mentor" />
                ))}
              </div>
            </div>
          </div>

          {/* IT Dev */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-semibold text-gray-700 mb-1">
              IT Development & AI
            </p>
            <div className="flex gap-3">
              <OrgBox name="Fadli Harahap" role="IT Dev Lead" />
              <OrgBox name="Gabriel Alvito" role="IT Dev Lead" />
            </div>
            <Connector orientation="vertical" length="20px" />
            <div className="flex justify-center gap-3">
              <OrgBox name="Ragil" role="Server" />
              <OrgBox name="Abdur" role="Front-End" />
              <OrgBox name="Doni" role="Back-End" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW (masih sama seperti aslinya) */}
      <div className="lg:hidden flex flex-col items-center space-y-4">
        <OrgBox name="Debbie R. Sianturi" role="CEO/CFO - Founder" highlight />
        <Connector orientation="vertical" length="12px" />
        <OrgBox name="Daniel Setiawan" role="CTO" />
        <Connector orientation="vertical" length="12px" />
        <OrgBox name="Joshua E. Sianturi" role="Komisaris" />

        <Connector orientation="vertical" length="16px" />
        <OrgBox name="Sekararum Widyan" role="Admin, HR & Legal" />
        <OrgBox name="Rachel Sianipar" role="Admin" />

        <Connector orientation="vertical" length="12px" />
        <OrgBox name="Dita Lestari" role="Finance, Admin Staff" />
        <OrgBox name="Maulid Nahar" role="Admin" />

        <Connector orientation="vertical" length="12px" />
        <OrgBox name="Yudha Mei L." role="Chief Operating Officer" />
        <p className="text-xs font-semibold text-gray-700">Kakak Mentor Team</p>
        <div className="grid grid-cols-2 gap-2 px-2">
          {[
            "Johan Simangusong",
            "Aci",
            "A. Saefuddin Zuhri",
            "Elfira Agustina",
            "Deswita",
            "Fikri",
            "Mumun Munawarah",
            "Rina Sitorus",
          ].map((name) => (
            <OrgBox key={name} name={name} role="Kakak Mentor" />
          ))}
        </div>

        <Connector orientation="vertical" length="12px" />
        <p className="text-sm font-bold text-gray-800">IT Development & AI</p>
        <OrgBox name="Fadli Harahap" role="IT Dev Lead" />
        <OrgBox name="Gabriel Alvito" role="IT Dev Lead" />
        <OrgBox name="Ragil" role="Server" />
        <OrgBox name="Abdur" role="Front-End" />
        <OrgBox name="Doni" role="Back-End" />
      </div>
    </section>
  );
};

export default StrukturOrgChart;
