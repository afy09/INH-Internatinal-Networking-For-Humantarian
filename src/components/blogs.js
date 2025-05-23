import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar } from "../assets/icons/vander";
import { FaRegUser } from "react-icons/fa";

export default function Blogs() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/news`);
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
  }, []);

  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mt-10">Berita Terkini</h3>
        <p className="text-slate-400 max-w-xl mx-auto">Berita terkini tentang kebaikan dan kepedulian untuk masyarakat</p>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {newsData.slice(0, 3).map((item) => (
            <div className="relative bg-white dark:bg-slate-900 p-4 border border-gray-800 rounded-md" key={item.id}>
              <img src={item.image} className="rounded-md shadow dark:shadow-gray-700 " alt={item.title} />
              <div className="pt-4">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start">
                    <div to="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2 rounded ">
                      {item.category?.nama}
                    </div>
                  </div>

                  <span className="flex items-center">
                    <FiCalendar className="h-2 w-2 text-slate-400" />
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
                    {item.title}
                  </Link>
                </div>

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
  );
}
