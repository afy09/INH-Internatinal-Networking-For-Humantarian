import React, { useEffect, useState } from "react";

export default function Pengumuman() {
  const [pengumuman, setPengumuman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/pengumuman`);
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

  return (
    <div className="container relative md:flex gap-3 md:mt-24 mt-16">
      <div className="mt-8 md:mt-0 w-full md:w-1/2">
        <div className="grid grid-cols-1 pb-3 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pengumuman</h3>
        </div>

        <div className="flex justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : pengumuman.length > 0 ? (
            pengumuman.map((item) => {
              const isValid = item.valid === "true";
              return (
                <div key={item.id} className="relative bg-white dark:bg-slate-900 p-4 rounded-md border border-gray-800 w-full">
                  {isValid && item.link_pengumuman ? (
                    <a href={item.link_pengumuman} target={isValid ? "_blank" : "_self"} rel={isValid ? "noopener noreferrer" : undefined}>
                      <img src={item.image} className="rounded-md shadow dark:shadow-gray-700 w-full h-64 object-cover cursor-pointer" alt="Pengumuman" />
                    </a>
                  ) : (
                    <img src={item.image} className="rounded-md shadow dark:shadow-gray-700 w-full h-64 object-cover" alt="Pengumuman" />
                  )}
                </div>
              );
            })
          ) : (
            <p>Tidak ada pengumuman tersedia</p>
          )}
        </div>
      </div>
    </div>
  );
}
