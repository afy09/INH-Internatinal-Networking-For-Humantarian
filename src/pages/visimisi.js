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
      <div className="grid grid-cols-1 text-center mt-20">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          <br /> Visi
          <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text"> Misi</span>
        </h3>
      </div>

      <section className="relative md:py-16 py-10 ">
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
