import React, { useEffect, useState } from "react";

export default function Pengumuman() {
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("http://fajarseptianto.my.id:8877/api/pengumuman");
        const result = await response.json();

        if (response && result) {
          // Simpan data terbaru berdasarkan created_at
          const latestData = Array.isArray(result) ? result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] : result;

          setLatestAnnouncement(latestData);
        } else {
          console.error("Failed to fetch announcements:", result?.message);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pengumuman</h3>
      </div>

      <div className="flex justify-center">
        {latestAnnouncement ? (
          <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700">
            <img src={latestAnnouncement.image} className="rounded-md shadow dark:shadow-gray-700" alt="Pengumuman" />
          </div>
        ) : (
          <p className="text-slate-400">Tidak ada pengumuman terbaru.</p>
        )}
      </div>
    </div>
  );
}
