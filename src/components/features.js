import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Features({ classlist }) {
  const [featuresData, setFeaturesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedTitleIndex, setExpandedTitleIndex] = useState(null);

  const toggleTitle = (index) => {
    setExpandedTitleIndex(expandedTitleIndex === index ? null : index);
  };
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/campaign?limit=6`);
        const result = await response.json();
        if (result.data) {
          setFeaturesData(result.data);
        }
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classlist}>
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            <br /> Campaign
            <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text"> Terkini</span>
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">Beberapa project terbaru yang kita kerjakan</p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {featuresData.slice(0, 6).map((item, index) => (
              <div className="relative overflow-hidden bg-[#323232]  border border-gray-800 rounded-md" key={item.id}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt={item.title} />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold cursor-pointer text-white" onClick={() => toggleTitle(index)} title={item.title}>
                    {item.title.length > 25 ? (expandedTitleIndex === index ? item.title : `${item.title.substring(0, 25)}...`) : item.title}
                  </h3>

                  <div className="flex justify-start">
                    <div className="bg-amber-400 text-white text-[10px] font-semibold px-2  rounded mt-2">{item.kategori}</div>
                  </div>
                  <div className="flex justify-between italic mt-2 text-sm text-slate-100 ">
                    <p>Target Pengumpulan :</p>
                    <p>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item?.total)}</p>
                  </div>
                  <p className="text-slate-400 mt-4">
                    {item.deskripsi.length > 50 ? (expandedIndex === index ? item.deskripsi : `${item.deskripsi.substring(0, 50)}...`) : item.deskripsi}

                    {item.deskripsi.length > 50 && (
                      <button onClick={() => toggleDescription(index)}>
                        <p className="text-amber-400 underline">{expandedIndex === index ? "Tutup" : "Selengkapnya"}</p>
                      </button>
                    )}
                  </p>
                </div>

                <div className="mt-6 mb-6 flex justify-center">
                  <Link to={item?.link} target="_blank">
                    <button className="text-lg font-semibold border px-6 py-2 rounded-xl text-white hover:bg-amber-400">Donasi Sekarang</button>
                  </Link>
                  {/* <Link to={`/donasi-detail/${item.id}`}>
                    <button className="text-lg font-semibold border px-6 py-2 rounded-xl text-white hover:bg-amber-400">Donasi Sekarang</button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
