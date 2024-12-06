import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutImg from "../assets/images/bg-about.png";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";
import about1 from "../assets/images/features/lewatobi.png";
import about2 from "../assets/images/features/lewatobi.png";
import about3 from "../assets/images/features/lewatobi.png";

import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  const featuresData = [
    {
      image: about1,
      title: "Erupsi Gunung Lewatobi",
      desc: "Artificial intelligence makes it fast easy to create content for your video creations.",
    },
    {
      image: about2,
      title: "Hangatan Gaza",
      desc: "Artificial intelligence makes it fast easy to create content for your video creations.",
    },
    {
      image: about3,
      title: "Bantu Sandang Papan untuk Yaman",
      desc: "Artificial intelligence makes it fast easy to create content for your video creations.",
    },
  ];
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Daftar Program</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Daftar Program
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="px-10">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className=" md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Sedekah <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Umum</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-6">
          {featuresData.map((item, index) => {
            return (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800" key={index}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt="" />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-10 mt-20">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className=" md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Pales<span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">tina</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-6">
          {featuresData.map((item, index) => {
            return (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 px-10" key={index}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt="" />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-10 mt-20">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className=" md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Inter<span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">national</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-6">
          {featuresData.map((item, index) => {
            return (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 px-10" key={index}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt="" />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-10 mt-20">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className=" md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Nati<span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">onal</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-6">
          {featuresData.map((item, index) => {
            return (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 px-10" key={index}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt="" />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
}
