import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

export default function Pengumuman() {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [pengumuman, setPengumuman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        const response = await fetch("https://api.rekapitung.id/api/pengumuman");
        const data = await response.json();
        setPengumuman(data.data || []);
      } catch (err) {
        setError("Gagal mengambil data pengumuman");
      } finally {
        setLoading(false);
      }
    };

    fetchPengumuman();
  }, []);

  const handleVideoOpen = (id) => {
    setSelectedVideo(id);
    setOpen(true);
  };

  return (
    <>
      <div className="container relative md:flex gap-3 md:mt-24 mt-16">
        <div className="pe-3 w-full md:w-1/2">
          <div className="grid grid-cols-1 pb-3 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Aktivitas Terbaru Kami</h3>
          </div>

          <div className="flex justify-center">
            <div onClick={() => handleVideoOpen("RJUI_OtyyxE")} className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700 cursor-pointer w-full">
              <img src="https://img.youtube.com/vi/RJUI_OtyyxE/0.jpg" className="rounded-md shadow dark:shadow-gray-700 w-full h-72 object-cover" alt="Pengumuman" />
            </div>
          </div>
        </div>

        <div className="ms-4 mt-8 md:mt-0 w-full md:w-1/2">
          <div className="grid grid-cols-1 pb-3 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pengumuman</h3>
          </div>

          <div className="flex justify-center">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : pengumuman.length > 0 ? (
              pengumuman.map((item) => (
                <div key={item.id} className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700 w-full">
                  <img src={item.image} className="rounded-md shadow dark:shadow-gray-700 w-full h-64 object-cover" alt="Pengumuman" />
                </div>
              ))
            ) : (
              <p>Tidak ada pengumuman tersedia</p>
            )}
          </div>
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={selectedVideo} onClose={() => setOpen(false)} />
    </>
  );
}
