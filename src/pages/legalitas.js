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
      <div className="grid grid-cols-1 text-center mt-20">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          <br />
          Lega
          <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">litas</span>
        </h3>
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
