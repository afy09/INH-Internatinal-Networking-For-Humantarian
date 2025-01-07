import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";

import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  const [featuresData, setFeaturesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rekapitung.id/api/campaign");
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
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Daftar Program</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Daftar Program
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center ">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            <br /> Campaign
            <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Terkini</span>
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">Beberapa project terbaru yang kita kerjakan</p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 mb-6 gap-6 ">
            {featuresData.map((item) => (
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 mx-10" key={item.id}>
                <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                  <img src={item.image} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt={item.title} />
                </div>

                <div className="p-6">
                  <h5 className="text-lg font-semibold">{item.title}</h5>
                  {/* <p className="text-slate-400 mt-3">{item.deskripsi}</p> */}
                </div>

                <div className="mt-8 mb-4 flex justify-center">
                  <Link to="https://api.rekapitung.id/api/pay" target="_blank">
                    <button className="text-lg font-semibold border px-6 py-2 rounded-xl text-white hover:bg-amber-400">Donasi Sekarang</button>
                  </Link>
                  {/* <p className="text-slate-400 mt-3">{item.deskripsi}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer className="mt-10" />
      <Switcher />
    </>
  );
}
