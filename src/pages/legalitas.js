import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";
import { FiCheckCircle } from "../assets/icons/vander";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Legalitas</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Legalitas
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

      <div className="container relative  mt-10">
        <div className="md:flex  items-start justify-center gap-3">
          <div className="w-full mb-3 md:mb-0">
            <div>
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Akta Pendirian</h4>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  No Akta : 4
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Tanggal : 5 Juni 2018
                </li>
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Notaris : EKA ASTRI MAERISA, SH., MH., M.Kn
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-3 md:mb-0">
            <div>
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Nomor Induk Berusaha</h4>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Nomor : 2306230036856
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-3 md:mb-0">
            <div>
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Kepmenkumham RI</h4>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Nomor : AHU-0000819.AH.01.08.TAHUN 2019
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative md:mt-24 mt-10 ">
        <div className="md:flex  items-start justify-center gap-3">
          <div className="w-full mb-3 md:mb-0">
            <div>
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Tanda Daftar Perkumpulan</h4>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Nomor : 062/6814/PPSKS/2021
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-3 md:mb-0">
            <div>
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Nomor Pokok Wajib Pajak (NPWP)</h4>
              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-2 flex items-center">
                  <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                  Nomor : 92.792.550.3-436.000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
