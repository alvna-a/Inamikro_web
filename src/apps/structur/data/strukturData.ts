// src/apps/struktur/strukturData.ts
export const strukturData = {
  hero: {
    title: "Struktur Organisasi",
    description: `INAmikro (PT. Mikrobisnis Digital Sejahtera) telah melayani dan memberi dampak kepada pelaku UMKM di Indonesia sejak 2017.
Mari kita bersama-sama dukung dan majukan UMKM Indonesia menuju Indonesia Emas 2045.`,
    image: "/about/debbie.png",
    name: "Debbie R. Sianturi",
    position: "Founder & CEO",
  },
  orgChart: [
    { name: "Debbie R. Sianturi", role: "CEO / Co-Founder", parent: null },
    { name: "Daniel Setiawan", role: "CTO", parent: "Debbie R. Sianturi" },
    { name: "Joshua E. Sianturi", role: "Komisaris", parent: "Debbie R. Sianturi" },
    { name: "Yudha Mei L.", role: "COO", parent: "Debbie R. Sianturi" },
    { name: "Dita Lestari", role: "Finance", parent: "Yudha Mei L." },
    { name: "Sekararum Widyan P", role: "Admin HR & Legal", parent: "Yudha Mei L." },
    { name: "Rachel Sianipar", role: "Staff Admin & Social Media", parent: "Yudha Mei L." },
    { name: "Maulid Nahar", role: "Staff Admin", parent: "Yudha Mei L." },
    { name: "Fadli Harahap", role: "IT Development & AI", parent: "Daniel Setiawan" },
    { name: "Gabriel Alvito", role: "IT Development & AI", parent: "Daniel Setiawan" },
    { name: "Ragil", role: "Server", parent: "Daniel Setiawan" },
    { name: "Abdur", role: "Front-End", parent: "Daniel Setiawan" },
    { name: "Doni", role: "Back-End", parent: "Daniel Setiawan" },
  ],
  teamMembers: [
    {
      name: "Daniel Setiawan",
      position: "Chief Technology Officer",
      image: "/about/team1.png",
    },
    {
      name: "Joshua E. Sianturi",
      position: "Komisaris",
      image: "/about/team2.png",
    },
    {
      name: "Yudha Mei L.",
      position: "Chief Operating Officer",
      image: "/about/team3.png",
    },
    {
      name: "Sekararum Widyan P",
      position: "Staff Admin, HR & Legal",
      image: "/about/team4.png",
    },
    {
      name: "Dita Lestari",
      position: "Finance & Perpajakan",
      image: "/about/team5.png",
    },
    {
      name: "Rachel Sianipar",
      position: "Staff Admin & Social Media",
      image: "/about/team6.png",
    },
    {
      name: "Maulid Nahar",
      position: "Staff Admin",
      image: "/about/team7.png",
    },
    {
      name: "Fadli Harahap",
      position: "IT Development & AI",
      image: "/about/team8.png",
    },
    {
      name: "Gabriel Alvito",
      position: "IT Development & AI",
      image: "/about/team9.png",
    },
    {
      name: "Ragil",
      position: "Server",
      image: "/about/team10.png",
    },
    {
      name: "Abdur",
      position: "Front-End",
      image: "/about/team11.png",
    },
    {
      name: "Doni",
      position: "Back-End",
      image: "/about/team12.png",
    },
  ],
};
