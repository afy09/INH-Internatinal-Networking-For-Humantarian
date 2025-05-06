import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutImg from "../assets/images/bg-about.png";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Visi & Misi</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Visi & Misi
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

      <section className="relative py-16 ">
        <div className="container relative -mt-10 ">
          <div className="lg:flex justify-center">
            <div className="lg:w-4/5">
              <div id="StarterContent" className="mt-6">
                <div>
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30  px-6 pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
                    <p>Menjadi lembaga kemanusiaan profesional berskala internasional yang mengedepankan sisi humanisme dalam mengemban tugas kemanusiaan demi mengembalikan stabilitas kehidupan di tengah masyarakat dunia.</p>
                    <p className="mt-4 italic">
                      To become a professional humanitarian organization on an international scale that prioritizes humanism in carrying out humanitarian tasks in order to restore stability to life in the world community.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30  px-6 pt-6 pb-6">
                    <h3 className="text-2xl font-semibold mb-4">Misi Kami</h3>
                    <ul className="list-decimal ">
                      <li>1. Memfasilitasi setiap individu maupun kelompok yang memiliki jiwa relawan, yang ingin mendedikasikan potensinya untuk masyarakat yang membutuhkan, baik secara nasional hingga internasional.</li>
                      <li>2. Mewujudkan harapan masyarakat yang membutuhkan untuk bisa hidup layak.</li>
                      <li>3.Memberikan solusi efektif dan efisien dalam menanggulangi krisis kemanusiaan di dunia terutama di wilayah tertinggal, terdalam, dan terluar.</li>
                      <li>4. Mengoptimalkan potensi kedermawanan masyarakat Indonesia dan dunia terhadap individu maupun kelompok yang hidup dalam krisis kemanusiaan dengan mengelola bantuan secara tepat dan akurat.</li>
                    </ul>

                    <ul className="list-decimal mt-4 italic">
                      <li>1. Facilitate every individual or group who has a volunteer spirit, who wants to dedicate their potential to communities in need, both nationally and internationally.</li>
                      <li>2. Realizing the hopes of people who need to be able to live a decent life..</li>
                      <li>3.Providing effective and efficient solutions in overcoming humanitarian crises in the world, especially in underdeveloped, deepest and outermost regions.</li>
                      <li>4. Optimizing the generosity potential of the people of Indonesia and the world towards individuals and groups living in humanitarian crises by managing aid in a timely and accurate manner.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
