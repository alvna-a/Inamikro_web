"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

type PartnerCategory = {
  title: string;
  icon: string;
  image: string;
};

const KemitraanKami: React.FC = () => {
  const [partners, setPartners] = useState<PartnerCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/kemitraan/kemitraan.json")
      .then((res) => res.json())
      .then((data: PartnerCategory[]) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data kemitraan:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500 bg-white">
        <p>Memuat data kemitraan...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Kemitraan Kami
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Kami membangun kemitraan berdasarkan kepercayaan dan komitmen jangka
          panjang. INAmikro siap menjadi partner terpercaya yang tidak hanya
          memberikan solusi, tetapi juga dukungan di setiap tantangan bisnis Anda.
        </p>

        <div className="space-y-16">
          {partners.map((section, idx) => {
            const Icon =
              (Icons as any)[section.icon] as React.ComponentType<any> | undefined;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-6">
                  {Icon ? (
                    <Icon className="w-6 h-6 text-[#F43F5E]" />
                  ) : (
                    <span className="w-6 h-6 inline-block" />
                  )}
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>

                <div className="flex justify-start">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-xl shadow-sm hover:shadow-md transition max-w-full h-auto"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KemitraanKami;
