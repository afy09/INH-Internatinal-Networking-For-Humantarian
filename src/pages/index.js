import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import bannerImg from "../assets/images/lewatobi.png";
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

export default function Index() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden pt-48 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30  after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative z-2">
          <div className="grid grid-cols-1 text-center">
            <div className="">
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                Ayo Bersama, Jadilah
                <br /> Bagian dari
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
                  className="typewrite bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ms-4"
                  repeat={Infinity}
                />
              </h4>
              <p className="text-slate-400 dark:text-white/60 text-lg max-w-xl mx-auto">
                {" "}
                Berkomitmen mengajak seluruh elemen masyarakat, lembaga, perusahaan, dan pemerintah untuk bersatu dalam meningkatkan peran sosial dalam penanggulangan krisis kemanusiaan.
              </p>

              <div className="mt-6">
                <Link to="" className="py-2 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">
                  Lanjut
                </Link>
              </div>
            </div>
            <div className=" mt-8 z-3 md:flex md:gap-3 justify-center">
              <div>
                <img src={BgLaptop} alt="" className="mover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6">
        <BrandLogo />
      </section>

      <section className="relative md:py-24 py-16">
        <Features classlist="container relative" />
        <AboutOne />
        <AboutTwo />
        <AmazingFeatures />
        <AboutThree />

        <Blogs />
      </section>
      <Footer />
      <Switcher />
    </>
  );
}