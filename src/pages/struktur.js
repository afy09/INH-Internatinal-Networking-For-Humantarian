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
  const [divisions, setDivisions] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/struktur`);
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

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/division`);
        const result = await response.json();
        setDivisions(result);
        if (result.length > 0) setActiveTab(result[0].id); // set default tab
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };

    fetchDivisions();
  }, []);

  const tabs = ["Dewan & Direksi", "Divisi Program", "Divisi Media Center", "Divisi Keuangan", "Divisi Digital Fundraising & IT", "Divisi Logistik"];

  const filterTeam = () => {
    return teamData.filter((item) => item.divisi?.id === activeTab);
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 text-center mt-20">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          <br /> Struktur
          <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text"> Organisasi</span>
        </h3>
      </div>
      <div className="container mt-10 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {divisions.map((div) => (
            <button
              key={div.id}
              className={`px-6 py-2 text-sm font-medium rounded-md  transition-colors duration-300 ms-2 mt-2 ${activeTab === div.id ? "bg-amber-400 text-white" : "border border-gray-800 text-white"}`}
              onClick={() => setActiveTab(div.id)}>
              {div.divisi}
            </button>
          ))}
        </div>
      </div>

      <section className="relative  py-10">
        <div className="container relative ">
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              {filterTeam().map((item) => (
                <div className="overflow-hidden relative w-full mx-auto bg-slate-900 border border-gray-800 rounded hover:shadow-md  flex items-center duration-500" key={item.id}>
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
    </>
  );
}
