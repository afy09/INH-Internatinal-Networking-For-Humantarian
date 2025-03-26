import React from "react";
import { Link } from "react-router-dom";

export default function AmazingFeatures() {
  const featureData = [
    {
      icon: "mdi mdi-email-edit-outline",
      title: "Akuntabilitas",
      desc: "Kami menerapkan akuntabilitas untuk mendapatkan nilai-nilai seperti trust, responsif, legalitas, kejelasan arah organisasi, dan penerimaan dari stakeholders dan masyarakat.",
    },

    {
      icon: "mdi mdi-account-check-outline",
      title: "Amanah",
      desc: "Komitmen kami adalah menjalankan visi dan misi dengan penuh amanah dan memprioritaskan kepercayaan, tujuan jelas, dan kepatuhan hukum untuk memenuhi kebutuhan masyarakat.",
    },
    {
      icon: "mdi mdi-comment-outline",
      title: "Transparan",
      desc: "Dalam menjaga kepercayaannya, Kami selalu mempublikasikan bentuk penyaluran bantuan program donasi di website, akun resmi media sosial dan administrasi kelembagaan.",
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Mengapa INH ?</h3>

          <p className="text-slate-400 max-w-xl mx-auto">Salah satu solusi terbaik untuk jembatan membantu berdonasi di Indonesia</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {featureData.map((item, index) => {
            return (
              <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900 border border-gray-800" key={index}>
                <div className="flex gap-5 items-center">
                  <i className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-amber-400 text-transparent bg-clip-text`}></i>

                  <Link to="" className="title h5 text-lg font-medium ms-4  hover:text-amber-400 duration-500">
                    {item.title}
                  </Link>
                </div>

                <div className="content mt-7">
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
