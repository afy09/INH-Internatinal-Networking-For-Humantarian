import React, { useEffect, useState } from "react";

export default function Features({ classlist }) {
  const [featuresData, setFeaturesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://fajarseptianto.my.id:8877/api/campaign");
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
            Latest Project <br /> Campaign
            <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Terkini</span>
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">Beberapa project terbaru yang kita kerjakan</p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {featuresData.map((item) => (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800" key={item.id}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt={item.title} />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  {/* <p className="text-slate-400 mt-3">{item.deskripsi}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
