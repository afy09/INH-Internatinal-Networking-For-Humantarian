import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

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
            return { id: item.id, videoId };
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
              <div className="w-full">
                <div className="w-full cursor-pointer pb-6" onClick={() => handleVideoOpen(videos[0]?.videoId)}>
                  <img src={`https://img.youtube.com/vi/${videos[0]?.videoId}/0.jpg`} className="w-full rounded-lg" alt={videos[0]?.title} />
                </div>
                {/* <div className="w-full cursor-pointer pb-6" onClick={() => handleVideoOpen(videos[0]?.videoId)}>
                  <img src={`https://img.youtube.com/vi/${videos[1]?.videoId}/0.jpg`} className="w-full rounded-lg" alt={videos[1]?.title} />
                </div> */}
              </div>
              <ul className="space-y-4">
                {videos.slice(1, 3).map((video) => (
                  <li key={video.id} className="flex items-center cursor-pointer" onClick={() => handleVideoOpen(video.videoId)}>
                    <img src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} alt={`Video ${video.id}`} className="w-60 h-30 rounded-md shadow-md mr-4" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo channel="youtube" isOpen={isOpen} videoId={selectedVideo} onClose={() => setOpen(false)} />
    </>
  );
}
