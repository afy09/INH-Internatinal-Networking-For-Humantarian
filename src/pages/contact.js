import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import contactImg from "../assets/images/contact.svg";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { FiHexagon, FiPhone, FiMail, FiMapPin } from "../assets/icons/vander";

export default function Contact() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid relative mt-20">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.6265156904547!2d106.97034117317021!3d-6.403768562626907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699584426474ff%3A0x17f6ce6b5b5ddbe2!2sINH%20For%20Humanity%20(International%20Networking%20for%20Humanitarian)!5e1!3m2!1sid!2sid!4v1732683540973!5m2!1sid!2sid"
              title="my-map"
              style={{ border: "0" }}
              className="w-full h-[500px]"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <section className="relative lg:py-24 py-16">
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-24 w-24 fill-amber-400/5 group-hover:fill-white/10 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-amber-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                  <FiPhone />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Phone</h5>

                <div className="mt-5 flex gap-3 justify-center">
                  Kantor :
                  <Link to="tel:+152534-468-854" className="hover:text-amber-400">
                    021 - 80472777
                  </Link>
                </div>

                <div className="mt-5 flex gap-3 justify-center">
                  Whatsapp :
                  <Link to="tel:+152534-468-854" className="hover:text-amber-400">
                    087731111336
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-24 w-24 fill-amber-400/5 group-hover:fill-white/10 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-amber-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                  <FiMail />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Email</h5>

                <div className="mt-5">
                  <Link to="office@inh.or.idinh.or.id" className="hover:text-amber-400">
                    office@inh.or.id inh.or.id
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-24 w-24 fill-amber-400/5 group-hover:fill-white/10 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-amber-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                  <FiMapPin />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">
                  Perum Cileungsi Hijau <br /> Jl. Thata Boulevard II, <br /> Kec. Cileungsi - Kab. Bogor, Jawa Barat 16820
                </p>

                <div className="mt-5">
                  <Link to="#" data-type="iframe" className="video-play-icon read-more lightbox hover:text-amber-400">
                    View on Google map
                  </Link>
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
