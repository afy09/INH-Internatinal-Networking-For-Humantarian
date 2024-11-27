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
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 ">
          <div className="lg:flex justify-center">
            <div className="lg:w-4/5">
              <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <li role="presentation" className="inline-block md:w-1/2 w-full p-2">
                  <button
                    className={`${activeIndex === 0 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `}
                    onClick={() => setActiveIndex(0)}>
                    <h5 className="text-base font-semibold">Visi Kami</h5>
                  </button>
                </li>
                <li role="presentation" className="inline-block md:w-1/2 w-full p-2">
                  <button
                    className={`${activeIndex === 1 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `}
                    onClick={() => setActiveIndex(1)}>
                    <h5 className="text-base font-semibold">Misi Kami</h5>
                  </button>
                </li>
              </ul>

              <div id="StarterContent" className="mt-6">
                {activeIndex === 0 ? (
                  <div>
                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6 pb-6">
                      <p>
                        Menjadi lembaga kemanusiaan profesional berskala internasional yang mengedepankan sisi humanisme dalam mengemban tugas kemanusiaan demi mengembalikan stabilitas kehidupan di tengah masyarakat dunia. <br /> To become
                        a professional humanitarian organization on an international scale that prioritizes humanism in carrying out humanitarian tasks in order to restore stability to life in the world community.
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {activeIndex === 1 ? (
                  <div>
                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6 pb-6">
                      <p>
                        Memfasilitasi setiap individu maupun kelompok yang memiliki jiwa relawan, yang ingin mendedikasikan potensinya untuk masyarakat yang membutuhkan, baik secara nasional hingga internasional. Mewujudkan harapan
                        masyarakat yang membutuhkan untuk bisa hidup layak. Memberikan solusi efektif dan efisien dalam menanggulangi krisis kemanusiaan di dunia terutama di wilayah tertinggal, terdalam, dan terluar. Mengoptimalkan potensi
                        kedermawanan masyarakat Indonesia dan dunia terhadap individu maupun kelompok yang hidup dalam krisis kemanusiaan dengan mengelola bantuan secara tepat dan akurat. Facilitate every individual or group who has a
                        volunteer spirit, who wants to dedicate their potential to communities in need, both nationally and internationally. Realizing the hopes of people who need to be able to live a decent life. Providing effective and
                        efficient solutions in overcoming humanitarian crises in the world, especially in underdeveloped, deepest and outermost regions. Optimizing the generosity potential of the people of Indonesia and the world towards
                        individuals and groups living in humanitarian crises by managing aid in a timely and accurate manner.
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
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
