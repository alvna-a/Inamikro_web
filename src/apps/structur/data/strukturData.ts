// src/apps/struktur/strukturData.ts
export const strukturData = {
  orgChart: [
    { name: "Debbie R. Sianturi", role: "CEO / Co-Founder", parent: null },
    { name: "Daniel Setiawan", role: "CTO", parent: "Debbie R. Sianturi" },
    { name: "Joshua E. Sianturi", role: "Komisaris", parent: "Debbie R. Sianturi" },
    { name: "Yudha Mei L.", role: "COO", parent: "Debbie R. Sianturi" },
    { name: "Dita Lestari", role: "Finance", parent: "Yudha Mei L." },
    { name: "Sekararum Widyan P", role: "Admin HR & Legal", parent: "Yudha Mei L." },
    { name: "Rachel Sianipar", role: "Staff Admin & Social Media", parent: "Yudha Mei L." },
    { name: "Maulid Nahar", role: "Staff Admin", parent: "Yudha Mei L." },
    { name: "Fadli Harahap", role: "IT Development & AI", parent: "Debbie R. Sianturi" },
    { name: "Gabriel Alvito", role: "IT Development & AI", parent: "Debbie R. Sianturi" },
    { name: "Ragil", role: "Server", parent: "Fadli Harahap" },
    { name: "Abdur", role: "Front-End", parent: "Fadli Harahap" },
    { name: "Doni", role: "Back-End", parent: "Fadli Harahap" },
  ],
  teamMembers: [
    {
      name: "Daniel Setiawan",
      position: "Chief Technology Officer",
      image: "/structur/team1.jpg",
    },
    {
      name: "Joshua E. Sianturi",
      position: "Komisaris",
      image: "/structur/team2.jpg",
    },
    {
      name: "Yudha Mei L.",
      position: "Chief Operating Officer",
      image: "/structur/team3.jpg",
    },
    {
      name: "Sekararum Widyan P",
      position: "Staff Admin, HR & Legal",
      image: "/structur/team4.jpg",
    },
    {
      name: "Dita Lestari",
      position: "Finance & Perpajakan",
      image: "/structur/team5.jpg",
    },
    {
      name: "Rachel Sianipar",
      position: "Staff Admin & Social Media",
      image: "/structur/team6.jpg",
    },
    {
      name: "Maulid Nahar",
      position: "Staff Admin",
      image: "/structur/team7.jpg",
    },
    {
      name: "Fadli Harahap",
      position: "IT Development & AI",
      image: "/structur/team8.jpg",
    },
    {
      name: "Gabriel Alvito",
      position: "IT Development & AI",
      image: "/structur/team9.jpg",
    },
    {
      name: "Ragil",
      position: "Server",
      image: "/structur/team10.jpg",
    },
    {
      name: "Abdur",
      position: "Front-End",
      image: "/structur/team11.jpg",
    },
    {
      name: "Doni",
      position: "Back-End",
      image: "/structur/team12.jpg",
    },
  ],
};
