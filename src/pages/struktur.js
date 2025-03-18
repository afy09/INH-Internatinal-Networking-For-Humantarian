import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Dewan & Direksi");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rekapitung.id/api/struktur");
        const result = await response.json();
        setTeamData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tabs = ["Dewan & Direksi", "Divisi Program", "Divisi Media Center", "Divisi Keuangan", "Divisi Digital Fundraising & IT", "Divisi Logistik"];

  const filterTeam = () => {
    return teamData.filter((item) => {
      if (activeTab === "Dewan & Direksi") {
        return ["Dewan Pembina", "Dewan Pengawas", "Founder", "Presiden Direktur", "Sekretaris"].includes(item.jabatan);
      } else if (activeTab === "Divisi Program") {
        return ["Manager Program", "Staff Program"].includes(item.jabatan);
      } else if (activeTab === "Divisi Media Center") {
        return item.jabatan.toLowerCase().includes("media");
      } else if (activeTab === "Divisi Keuangan") {
        return item.jabatan.toLowerCase().includes("finance");
      } else if (activeTab === "Divisi Digital Fundraising & IT") {
        return item.jabatan.toLowerCase().includes("fundraising") || item.jabatan.toLowerCase().includes("it") || item.jabatan.toLowerCase().includes("customer service") || item.jabatan.toLowerCase().includes("fundraiser");
      } else if (activeTab === "Divisi Logistik") {
        return item.jabatan.toLowerCase().includes("logistik");
      }
      return false;
    });
  };

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Struktur Organisasi</h5>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-10 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-sm font-medium rounded-md  transition-colors duration-300 ms-2 ${activeTab === tab ? "bg-amber-400 text-white" : "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200"}`}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="relative md:py-4 py-16">
        <div className="container relative md:mt-5 mt-10">
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              {filterTeam().map((item) => (
                <div className="overflow-hidden relative w-full mx-auto bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-slate-800 rounded-md flex items-center duration-500" key={item.id}>
                  <img src={item.gambar} alt={item.nama} className="absolute -start-10 w-40 h-40 rounded-full shadow-lg" />
                  <div className="min-w-0 py-10 ps-36 pe-6">
                    <Link to="#" className="text-lg font-medium hover:text-amber-400">
                      {item.nama}
                    </Link>
                    <p className="text-slate-400">{item.jabatan}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
