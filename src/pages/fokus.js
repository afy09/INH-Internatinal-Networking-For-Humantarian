import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";

import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-20 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Fokus Utama</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Fokus Utama
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#323232"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="lg:flex justify-center">
            <div className="lg:w-4/5">
              <div id="StarterContent" className="mt-6">
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30  px-6 pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-4">Pendidikan</h3>
                    <p>
                      Sejak awal berdiri, INH telah berfokus pada pengembangan generasi yang tidak boleh kehilangan akses pendidikan meskipun menghadapi ancaman perampasan hak pendidikan dan tantangan ekonomi yang berkelanjutan. Program ini
                      mencakup berbagai aktivitas dan bantuan yang melibatkan siswa hingga mahasiswa, untuk memastikan mereka mendapatkan akses dan fasilitas pendidikan yang memadai. Program-program tersebut mencakup bantuan sekolah seperti
                      tas, seragam, dan alat tulis untuk yatim dan dhuafa, beasiswa pendidikan, perbaikan sarana prasarana pendidikan, dan banyak lagi.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30  px-6 pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-4">Pemberdayaan</h3>
                    <p>
                      Program kemanusiaan ditujukan kepada warga Indonesia dan dunia sebagai penerima dan pemberi bantuan. INH memberdayakan mereka agar tidak terpuruk dalam kondisi ekonomi dunia yang tidak selalu stabil. INH mendorong
                      kreativitas warga dunia dalam segala bentuk pelatihan yang berorientasi pada pengembangan diri, serta memberikan bantuan kepada UMKM agar dapat bertahan dalam semua kondisi.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30  px-6 pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-4">Kebencanaan</h3>
                    <p>
                      Sebagai lembaga kemanusiaan, kedaruratan menjadi hal yang tidak dapat dihindarkan. Bencana datang silih berganti, tidak memandang lokasi. INH sejak awal berdiri telah menjadi salah satu lembaga kemanusiaan yang
                      terlibat dalam mengirimkan tidak hanya bantuan logistik, tetapi juga kebutuhan mendesak lainnya seperti obat-obatan, kebutuhan musiman, serta program pangan di dalam dan luar negeri. Bantuan ini ditujukan untuk
                      memenuhi segala kebutuhan mendasar, dan bahkan dilakukan secara rutin dan konsisten. Selama lima tahun terakhir, INH telah melaksanakan program bantuan serupa di 11 negara, termasuk Indonesia, Palestina, Rohingya,
                      Yaman, Suriah, Uganda, Nigeria, Kenya, Sudan Selatan, Turki, dan Chad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
