import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiCalendar } from "../../assets/icons/vander";
import { FaRegUser } from "react-icons/fa";
import NewsCardSkeleton from "../../components/skeleton/skeletonNews";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function InhNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const categories = ["Palestina", "International", "Nasional"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${process.env.REACT_APP_API_BASE_URL}/api/news?limit=12`;
        if (category && category !== "Semua") {
          url += `&category=${encodeURIComponent(category)}`;
        }

        const response = await fetch(url);
        const result = await response.json();

        if (result.data) {
          setNewsData(result.data);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const truncateHTML = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const text = tempElement.textContent || tempElement.innerText || "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleCategoryClick = (cat) => {
    if (cat === "Semua") {
      navigate("/inhnews"); // hapus query
    } else {
      navigate(`/inhnews?category=${encodeURIComponent(cat)}`);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container relative md:mt-24 mt-24 mb-8">
        {/* HEADER */}
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl text-2xl font-semibold">Berita {category && category !== "Semua" ? category : "Terbaru"}</h3>
          <p className="text-slate-400 max-w-xl mx-auto">Berita tentang kebaikan dan kepedulian untuk masyarakat</p>
        </div>

        {/* ✅ TABS KATEGORI */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200
                ${category === cat || (!category && cat === "Semua") ? "bg-amber-400 text-white shadow-md" : "border border-gray-800 text-white"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {loading ? (
          <NewsCardSkeleton />
        ) : newsData.length === 0 ? (
          <p className="text-center text-slate-400 mt-10 text-lg">Tidak ada Berita {category && category !== "Semua" ? category : "Terbaru"}</p>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {newsData.map((item) => (
              <div className="relative bg-white dark:bg-slate-900 p-4 border border-gray-800 rounded-md" key={item.id}>
                <img src={item.image} className="rounded-md shadow dark:shadow-gray-700 h-44 w-full object-cover" alt={item.title} />
                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <div className="bg-amber-400/10 text-amber-500 text-[12px] font-semibold px-2 rounded">{item.category?.nama}</div>
                    <span className="flex items-center">
                      <FiCalendar className="h-4 w-4 text-slate-400" />
                      <span className="ms-1 text-slate-400">{new Date(item.created_at).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/news/${item.id}/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w\-]+/g, "")}`}
                      className="text-lg font-semibold hover:text-amber-400">
                      {item.title.length > 60 ? item.title.slice(0, 60) + "..." : item.title}
                    </Link>
                  </div>

                  <p
                    className="text-gray-400 text-sm mt-2 mb-2"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(item?.deskripsi || "", 120),
                    }}></p>

                  <div className="mt-5 flex justify-between items-center">
                    <span className="flex items-center">
                      <FaRegUser className="h-4 w-4 text-slate-400" />
                      <span className="ms-1 text-slate-400">{item.user?.name}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
