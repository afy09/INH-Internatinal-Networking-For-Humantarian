import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import DonasiList from "../components/donasi/donatur";

export default function TankYouPage() {
  const { id } = useParams(); // Mendapatkan ID dari parameter URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy donasi
  const totalTerkumpul = 5500000;
  const targetDonasi = 10000000;
  const percentage = Math.min(Math.round((totalTerkumpul / targetDonasi) * 100), 100);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/campaign/${id}`);
        const result = await response.json();
        if (result?.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-20">
        <h3>Data not found</h3>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="relative md:pt-44 pt-32 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 md:w-4/5">
              {/* <Link to="" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                {data.kategori}
              </Link> */}

              <h5 className="md:text-4xl text-3xl font-bold md:tracking-normal tracking-normal md:leading-normal leading-normal ">{data.title}</h5>
              {/* Gambar */}
              <div className="">
                <img src={data.image} className="rounded-md shadow dark:shadow-gray-700 mt-5" alt={data.title} />
              </div>

              {/* Informasi Donasi */}
              <div className="mt-6 mb-8 bg-white/10 dark:bg-slate-900/30  ">
                {/* Bagian atas */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-amber-400 text-xl font-bold">Rp {totalTerkumpul.toLocaleString("id-ID")}</span>
                  <span className="text-gray-400 text-sm">75 hari lagi</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-400 dark:bg-gray-400 rounded-full h-2 mt-2">
                  <div className="bg-amber-400 h-2 rounded-full transition-all duration-500" style={{ width: `60%` }}></div>
                </div>

                {/* Bagian bawah */}
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-500">{percentage}%</span>
                  <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold">Rp {targetDonasi.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex gap-2 mt-10">
                  {/* Tombol Donasi */}

                  <button className="flex items-center justify-center gap-2 bg-amber-400 text-white px-6 py-3 rounded-md w-full hover:bg-amber-400 transition-all duration-300">
                    <FaRegHeart size={18} />
                    <Link to={`/donasi-detail/${id}`}>
                      {" "}
                      <span className="font-semibold">Donasi Sekarang</span>
                    </Link>
                  </button>

                  {/* Tombol Bagikan */}
                  <button className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 transition-all duration-300">
                    <FaShareAlt size={18} />
                    <span className="font-semibold">Bagikan</span>
                  </button>
                </div>
              </div>

              {/* Deskripsi */}

              <div className="mt-4 border border-gray-800 rounded-lg p-5">
                <div className="text-xl font-semibold">Deskripsi Program</div>
                <p className="text-slate-400  mt-2">{data.deskripsi}</p>
              </div>

              <div>
                <DonasiList />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
