import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaHome } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lottie from "lottie-react";
import successAnim from "../assets/lottie/Succes.json";
export default function ThankYouPage() {
  const { id } = useParams();
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
        console.error("Error fetching campaign detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-40 text-gray-500 text-lg">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center mt-40 text-red-500 text-lg">Data not found</div>;
  }

  return (
    <>
      <Navbar />
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-200 via-pink-100 to-purple-200 dark:from-amber-400/20 dark:via-pink-400/10 dark:to-purple-400/20 px-4 mt-10 mb-8">
        <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-md shadow-2xl rounded-lg max-w-xl w-full text-center p-5 border border-gray-800 ">
          {/* ✅ Icon Success */}
          <div className="flex justify-center mb-4">
            <Lottie animationData={successAnim} loop={true} className="w-30 h-30" />
          </div>

          {/* 🎉 Pesan Utama */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Terima Kasih Atas Donasi Anda!</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
            Donasi Anda telah berhasil dikonfirmasi untuk program <span className="font-semibold text-amber-500">{data.title}</span>. Dukungan Anda sangat berarti bagi kami 🙏
          </p>

          {/* 📊 Info progress */}
          <div className="mt-8 bg-white/60 dark:bg-slate-800/70 rounded-lg p-5 shadow-inner">
            <img src={data.image} alt={data.title} className="rounded-md mb-4 shadow-lg w-full h-48 object-cover" />

            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-500 dark:text-gray-300">Terkumpul</span>
              <span className="font-semibold text-amber-500">Rp {totalTerkumpul.toLocaleString("id-ID")}</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
            </div>

            <div className="flex justify-between items-center mt-1 text-xs">
              <span className="text-gray-400">{percentage}%</span>
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Target: Rp {targetDonasi.toLocaleString("id-ID")}</span>
            </div>
          </div>

          {/* ❤️ Tombol Aksi */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
            <Link to={`/donasi-detail/${id}`} className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
              <FaHeart />
              Donasi Lagi
            </Link>

            <Link to="/" className="flex items-center justify-center gap-2 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 border border-gray-400">
              <FaHome />
              Beranda
            </Link>
          </div>

          {/* ✨ Pesan Penutup */}
          <div className="mt-10 text-xs text-gray-500 dark:text-gray-400">
            Kami akan mengirimkan update terbaru mengenai perkembangan program ini melalui email Anda.
            <span className="italic">Semoga kebaikan Anda dibalas berlipat ganda 🤍</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
