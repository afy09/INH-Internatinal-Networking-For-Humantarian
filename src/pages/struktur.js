import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutImg from "../assets/images/bg-about.png";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";

import client1 from "../assets/images/client/01.jpg";
import client2 from "../assets/images/client/02.jpg";
import client3 from "../assets/images/client/03.jpg";
import client4 from "../assets/images/client/04.jpg";
import client5 from "../assets/images/client/05.jpg";
import client6 from "../assets/images/client/06.jpg";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const teamData = [
    {
      image: client1,
      name: "Calvin Carlo",
      title: "C.E.O",
    },
    {
      image: client2,
      name: "Aliana Rosy",
      title: "Co-founder",
    },
    {
      image: client3,
      name: "Sofia Razaq",
      title: "C.O.O.",
    },
    {
      image: client4,
      name: "Ronny Jofra",
      title: "Director",
    },
    {
      image: client5,
      name: "Cristina Murphy",
      title: "Manager",
    },
    {
      image: client6,
      name: "Jimmi Shaa",
      title: "Operator",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Latar Belakang</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Struktur Organisasi
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

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The Team</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {teamData.map((item, index) => {
              return (
                <div className="overflow-hidden relative w-full mx-auto bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-slate-800 rounded-md flex items-center duration-500" key={index}>
                  <img src={item.image} alt="" className="absolute -start-10 w-40 h-40 rounded-full shadow-lg" />
                  <div className="min-w-0 py-10 ps-36 pe-6">
                    <Link to="" className="text-lg font-medium hover:text-amber-400">
                      {item.name}
                    </Link>
                    <p className="text-slate-400">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
