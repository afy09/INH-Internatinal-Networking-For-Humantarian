import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BgLaptop from "../assets/images/bg-laptop.png";
import Navbar from "../components/navbar";
import BrandLogo from "../components/brandLogo";
import Features from "../components/features";
import AboutOne from "../components/aboutOne";
import AboutTwo from "../components/aboutTwo";
import AmazingFeatures from "../components/amazingFeatures";
import AboutThree from "../components/aboutThree";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/pagination";
import Pengumuman from "../components/pengumuman2";
import FlotillaTracker from "../components/flotaria";

export default function Index() {
  const [imageData, setimageData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/banners`);
        const result = await response.json();
        console.log("Response dari API:", result);

        if (Array.isArray(result.data)) {
          setimageData(result.data);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden pt-32 xl:pt-48 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30  after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-amber-400/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative lg:flex gap-8 z-2 mb-8">
          <div className="grid grid-cols-1 text-center ">
            <div className="">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-center lg:text-start">
                Ayo Bersama,
                <br /> Jadilah Bagian dari
                <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Solusi",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Kebaikan",
                    1000,
                    "Kepedulian",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  className="typewrite bg-gradient-to-br from-amber-400 to-amber-400 text-transparent bg-clip-text ms-4"
                  repeat={Infinity}
                />
              </h4>
              <p className="text-slate-400 dark:text-white/60 text-lg max-w-xl text-center lg:text-start mb-24 ">
                {" "}
                Berkomitmen mengajak seluruh elemen masyarakat, lembaga, perusahaan, dan pemerintah untuk bersatu dalam meningkatkan peran sosial dalam penanggulangan krisis kemanusiaan.
              </p>

              {/* <div className="mt-6">
                <Link to="" className="py-2 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">
                  Lanjut
                </Link>
              </div> */}
            </div>
          </div>
          <div className="mt-8 lg:mt-0  z-3 md:flex md:gap-3 justify-center rounded-xl ">
            <div className="relative">
              {/* Frame Laptop */}
              <img src={BgLaptop} alt="Laptop Frame" className="rounded-lg" />
              {/* Slider Area */}
              <div className="absolute inset-0 p-8 rounded-xl">
                {imageData.length > 0 && (
                  <Swiper
                    modules={[Pagination, Autoplay]} // Tambahkan Autoplay
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // Konfigurasi auto-slide
                    loop={true}
                    className="h-full w-full">
                    {imageData.map((item, index) => (
                      <SwiperSlide key={index}>
                        <a href={item.link_banner} target={item.valid === "true" ? "_blank" : "_self"} rel="noopener noreferrer">
                          <img src={item.image} alt={`slide-${index}`} className="object-contain rounded-xl" />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        {/* CAMPAIGN KAMI */}
        <Features classlist="container relative" />

        {/* TENTANG KAMI */}
        <AboutOne />

        {/* PERJALANAN KAMI */}
        <AboutTwo />

        {/* MENGAPA INH */}
        <AmazingFeatures />

        {/* Aktivitas Terbaru */}
        <AboutThree />

        <Pengumuman />
        {/* BERITA */}
        <Blogs />
        {/* MITRA KERJA SAMA */}
      </section>
      <section className="pt-6">
        <BrandLogo />
      </section>
      <Footer />
    </>
  );
}
