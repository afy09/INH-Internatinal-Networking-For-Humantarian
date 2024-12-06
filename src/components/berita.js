import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar } from "../assets/icons/vander";

export default function Blogs() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://fajarseptianto.my.id:8877/api/news");
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
      <div className="grid grid-cols-1 pb-3 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Berita Lainnya</h3>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3 gap-6">
          {newsData.slice(0, 3).map((item) => (
            <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={item.id}>
              <img src={item.image} className="rounded-md shadow dark:shadow-gray-700" alt={item.title} />
              <div className="pt-4">
                {/* <div className="flex justify-between items-center">
                  <div className="space-x-1">
                    <Link to="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                      Kepedulian
                    </Link>
                  </div>

                  <span className="flex items-center">
                    <FiClock className="h-4 w-4" />
                    <span className="ms-1 text-slate-400">5 min read</span>
                  </span>
                </div> */}

                <div className="mt-5">
                  <Link to={`/blog-detail/${item.id}`} className="text-lg font-semibold hover:text-amber-400">
                    {item.title}
                  </Link>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <span className="flex items-center">
                    <FiCalendar className="h-4 w-4" />
                    <span className="ms-1 text-slate-400">{new Date(item.created_at).toLocaleDateString()}</span>
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
