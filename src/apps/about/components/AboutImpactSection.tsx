import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiNotebookLight, PiBank, PiCreditCard, PiShoppingBagOpen, PiIdentificationBadge } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { TbBrandShopee } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";

const impactStats = [
  {
    icon: <HiOutlineUserGroup className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "21.306+",
    label: "Total binaan",
  },
  {
    icon: <PiNotebookLight className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "8.815+",
    label: "Pelatihan Literasi Digital",
  },
  {
    icon: <PiIdentificationBadge className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "19.982+",
    label: "Pelatihan Legalitas Usaha",
  },
  {
    icon: <PiBank className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "753+",
    label: "Pembuatan Rekening",
  },
  {
    icon: <PiCreditCard className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "1.400+",
    label: "Penyaluran Kredit Mikro",
  },
  {
    icon: <MdOutlinePayment className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "765+",
    label: "Pelatihan Digital Payment",
  },
  {
    icon: <TbBrandShopee className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "547+",
    label: "Pelatihan E-Logistic & E-commerce",
  },
  {
    icon: <FaRegBuilding className="text-3xl md:text-4xl text-[#2B2B2B]" />,
    value: "182+",
    label: "Branding Usaha, Company Profile",
  },
];

const AboutImpactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Dampak Nyata & Pencapaian
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Kami percaya dampak nyata lahir dari aksi berkelanjutan. Berikut adalah capaian yang berhasil diwujudkan bersama para pelaku UMKM binaan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-3">
          {/* Baris 1 */}
          <div className="flex flex-col gap-6 w-full sm:col-span-2 md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactStats.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#FBC6C6] rounded-2xl px-6 py-6 gap-4 shadow-sm"
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="font-bold text-xl md:text-2xl text-[#2B2B2B]">{item.value}</div>
                    <div className="text-base md:text-lg text-[#2B2B2B] font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Baris 2 */}
          <div className="flex flex-col gap-6 w-full sm:col-span-2 md:col-span-3 lg:col-span-3 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactStats.slice(3, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#FBC6C6] rounded-2xl px-6 py-6 gap-4 shadow-sm"
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="font-bold text-xl md:text-2xl text-[#2B2B2B]">{item.value}</div>
                    <div className="text-base md:text-lg text-[#2B2B2B] font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Baris 3 */}
          <div className="flex flex-col gap-6 w-full sm:col-span-2 md:col-span-3 lg:col-span-3 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactStats.slice(6, 8).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#FBC6C6] rounded-2xl px-6 py-6 gap-4 shadow-sm"
                >
                  <div>{item.icon}</div>
                  <div>
                    <div className="font-bold text-xl md:text-2xl text-[#2B2B2B]">{item.value}</div>
                    <div className="text-base md:text-lg text-[#2B2B2B] font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImpactSection;
