import React, { useState } from "react";
import { FiCheckCircle } from "../assets/icons/vander";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

const videos = [
  { id: "RJUI_OtyyxE", title: "Apa Itu INH ( International Networking For Humanitarian ) ?" },
  { id: "iyyVrXIvY1E", title: "Bantuan Uang Tunai Untuk Warga Gaza" },
  { id: "6QjlIdb8aKg", title: "Distribusi Air Bersih Untuk Palestina dari Rakyat Indonesia" },
  { id: "cMJ2ukBnjgg", title: "Kolaborasi Kemanusiaan Untuk Bangun Gaza Kembali" },
  { id: "hM_zwgnol_Q", title: "Bantu Saudara kita di Gaza agar tidak kedinginan di musim Dingin tahun ini" },
  { id: "LUGqDe24p2Q", title: "INH bersama Cinta Quran Foundation Distribusi Air Bersih untuk warga Palestina" },
];

export default function AboutThree() {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoOpen = (id) => {
    setSelectedVideo(id);
    setOpen(true);
  };

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="">
          <div className="relative w-full overflow-y-auto p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800">
            <h3 className="mb-4 md:text-3xl text-2xl font-semibold">Galeri Video INH</h3>
            <div className="md:flex gap-6">
              <div className="w-full  cursor-pointer pb-6 " onClick={() => handleVideoOpen("RJUI_OtyyxE")}>
                <img src="https://img.youtube.com/vi/RJUI_OtyyxE/0.jpg" className="w-full rounded-lg "></img>
              </div>
              <ul className="space-y-4 ">
                {videos.map((video) => (
                  <li key={video.id} className="flex items-center cursor-pointer" onClick={() => handleVideoOpen(video.id)}>
                    <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} alt={video.title} className="w-28 h-16 rounded-md shadow-md mr-4" />
                    <span className="text-slate-400 ms-5">{video.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="">
          <h3 className="mb-4 md:text-3xl text-2xl font-semibold">Visi & Misi</h3>
          <p className="text-slate-400 max-w-xl">
            "Menjadi lembaga kemanusiaan profesional berskala internasional yang mengedepankan sisi humanisme dalam mengemban tugas kemanusiaan demi mengembalikan stabilitas kehidupan di tengah masyarakat dunia."
          </p>

          <ul className="list-none text-slate-400 mt-4">
            <li className="mb-2 flex items-center">
              <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Mewujudkan harapan masyarakat yang membutuhkan untuk bisa hidup layak.
            </li>
          </ul>

          <div className="mt-4">
            <a href="#!" className="hover:text-amber-400 font-medium duration-500">
              Selengkapnya <i className="mdi mdi-chevron-right text-[20px] align-middle"></i>
            </a>
          </div>
        </div> */}
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={selectedVideo} onClose={() => setOpen(false)} />
    </>
  );
}
