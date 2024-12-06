import React, { useState } from "react";
import { Link } from "react-router-dom";

import videoImg from "../assets/images/inh-vid.png";

import { FiCheckCircle } from "../assets/icons/vander";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutThree() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800">
            <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
              <div className="relative">
                <img src={videoImg} className="w-full" alt="" />
              </div>

              <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                <Link
                  to="#!"
                  onClick={() => setOpen(true)}
                  className="lightbox lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Visi & Misi</h3>
            <p className="text-slate-400 max-w-xl">
              "Menjadi lembaga kemanusiaan profesional berskala internasional yang mengedepankan sisi humanisme dalam mengemban tugas kemanusiaan demi mengembalikan stabilitas kehidupan di tengah masyarakat dunia."
            </p>

            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Mewujudkan harapan masyarakat yang membutuhkan untuk bisa hidup layak.
              </li>
            </ul>

            <div className="mt-4">
              <Link to="" className="hover:text-amber-400 font-medium duration-500">
                Selengkapnya <i className="mdi mdi-chevron-right text-[20px] align-middle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="RJUI_OtyyxE" onClose={() => setOpen(false)} />
    </>
  );
}
