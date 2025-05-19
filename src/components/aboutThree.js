import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";
import { Link } from "react-router-dom";

// Fungsi untuk mengekstrak ID video YouTube dari URL
const extractVideoID = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function AboutThree() {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/aktivitas-terbaru`);
        const result = await response.json();
        const videoData = await Promise.all(
          result.map(async (item) => {
            const videoId = extractVideoID(item.url);
            return { id: item.id, videoId, nama: item.nama };
          })
        );

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchData();
  }, []);

  const handleVideoOpen = (id) => {
    setSelectedVideo(id);
    setOpen(true);
  };

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="">
          <div className="relative w-full overflow-y-auto p-6 border border-gray-800 rounded-md shadow dark:shadow-slate-800">
            <h3 className="mb-4 md:text-3xl text-2xl font-semibold">Aktivitas Terbaru Kami</h3>
            <div className="md:flex gap-6">
              <div className="w-full ">
                <div className="relative w-full">
                  <a href={`https://www.youtube.com/watch?v=${videos[0]?.videoId}`} target="_blank" rel="noopener noreferrer">
                    <img src={`https://img.youtube.com/vi/${videos[0]?.videoId}/0.jpg`} className="w-full rounded-lg" alt={videos[0]?.title} />
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-2 md:p-5 bg-amber-400 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div> */}
                  </a>
                </div>
                <h1 className="mt-2 text-base lg:text-2xl  hover:text-amber-400 ">{videos[0]?.nama}</h1>

                {/* <div className="w-full cursor-pointer pb-6" onClick={() => handleVideoOpen(videos[0]?.videoId)}>
                  <img src={`https://img.youtube.com/vi/${videos[1]?.videoId}/0.jpg`} className="w-full rounded-lg" alt={videos[1]?.title} />
                </div> */}
              </div>
              <div className="w-full space-y-4 mt-4">
                {videos.slice(1, 8).map((video) => (
                  <div key={video.id} className="flex items-center gap-4">
                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <img src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} alt={`Video ${video.id}`} className="w-30 h-16 object-cover rounded-md shadow-md" />
                    </a>
                    <p className="text-white text-sm leading-snug ms-4 hover:text-amber-400">{video.nama}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={selectedVideo} onClose={() => setOpen(false)} />
    </>
  );
}
