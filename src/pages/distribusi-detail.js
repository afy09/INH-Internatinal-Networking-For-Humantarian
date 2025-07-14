import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCalendar } from "../assets/icons/vander";
import { FaRegUser } from "react-icons/fa";
import NavbarBerita from "../components/navbarberita";
import { Helmet } from "react-helmet";

export default function BlogDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [allCampaign, setAllCampaign] = useState([]);
  const [allActivate, setAllActivate] = useState([]);
  const [loading, setLoading] = useState(true);

  const truncateHTML = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const text = tempElement.textContent || tempElement.innerText || "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/distribusi-program/${id}`);
        const result = await response.json();
        setData(result.data || null);
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllNews = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/distribusi-program`);
        const result = await response.json();
        if (result.data) {
          setAllNews(result.data.filter((item) => item?.id !== Number(id)));
        }
      } catch (error) {
        console.error("Error fetching all news:", error);
      }
    };

    const fetchAllCampaign = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/campaign`);
        const result = await response.json();
        if (result.data) {
          setAllCampaign(result.data);
        }
      } catch (error) {
        console.error("Error fetching all news:", error);
      }
    };

    const fetchAllActivate = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/aktivitas-terbaru`);
        const result = await response.json();

        if (result) {
          // Ekstrak videoId dari URL
          const dataWithVideoId = result.map((item) => {
            const url = new URL(item.url);
            const videoId = url.searchParams.get("v"); // ambil 'v' dari query string
            return { ...item, videoId };
          });

          setAllActivate(dataWithVideoId);
        }
      } catch (error) {
        console.error("Error fetching all news:", error);
      }
    };

    fetchData();
    fetchAllNews();
    fetchAllCampaign();
    fetchAllActivate();
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
      <Helmet>
        <title>{data?.title}</title>
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.caption || data.deskripsi?.substring(0, 150)} />
        <meta property="og:image" content={data?.image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <NavbarBerita />
      <section className="md:pt-36 pt-32 bg-white ps-4 pe-4 lg:px-20">
        <div className=" md:flex lg:gap-2">
          <div className="lg:w-2/3 md:w-4/5">
            <Link to="#" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
              {data.category?.nama}
            </Link>
            <div className="text-3xl font-bold mt-3 text-slate-900">{data?.title}</div>
            <div className="flex items-center mt-2">
              <div className="flex items-center gap-2 text-slate-400">
                <FaRegUser className="h-4 w-4" />
                <h6>
                  <Link to="#" className="font-medium hover:text-amber-400 ms-2">
                    {data.user?.name}
                  </Link>
                </h6>
              </div>
              <div className="text-slate-400 text-sm flex gap-2 items-center ms-4">
                <FiCalendar className="h-4 w-4" />
                <span className="ms-2">{new Date(data.created_at).toLocaleDateString()}</span>
              </div>
            </div>
            <img src={data.image} className="rounded-md shadow mt-5" alt={data.title} />
            <p className="text-slate-900 mt-2 mb-2 italic">{data.caption}</p>
            <p className="text-gray-700 text-lg mt-3 mb-8" dangerouslySetInnerHTML={{ __html: data?.deskripsi }}></p>
          </div>

          {/* DISTRI, CAMPAIGN, ACTIVATE */}
          <aside className="lg:w-1/3 mt-10 md:mt-0">
            <h4 className="font-semibold text-lg text-slate-900 border-b pb-2 mb-4">Distribusi Lainnya</h4>
            {/* DISTRI */}
            <div className="space-y-4 w-full">
              {allNews.slice(0, 5).map((news) => (
                <Link
                  to={`/news/${news?.id}/${news?.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w\-]+/g, "")}`}
                  key={news.id}
                  className="w-full">
                  <div className="flex   w-full mt-4">
                    <img src={news.image} alt={news.title} className="w-full h-24   rounded" />
                    <div className="w-full ms-3">
                      <p className=" text-slate-900 leading-tight text-sm"> {news.title.length > 20 ? news.title.slice(0, 20) + "..." : news.title}</p>
                      <p
                        className="text-gray-400 text-sm mt-1 mb-2"
                        dangerouslySetInnerHTML={{
                          __html: truncateHTML(news?.deskripsi || "", 30),
                        }}></p>
                      <p className="text-slate-900 text-xs mt-1 mb-2">{new Date(news.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CAMPAIGN */}
            <div className="mt-10">
              <h4 className="font-semibold text-lg text-slate-900 border-b pb-2 mb-4">Campaign</h4>
              <div className="space-y-4 w-full">
                {allCampaign.slice(0, 5).map((news) => (
                  <Link to={news?.link} key={news.id} className="w-full">
                    <div className="flex   w-full mt-4">
                      <img src={news.image} alt={news.title} className="w-full h-24   rounded" />
                      <div className="w-full ms-3">
                        <p className=" text-slate-900 leading-tight text-sm"> {news.title.length > 20 ? news.title.slice(0, 20) + "..." : news.title}</p>
                        <p
                          className="text-gray-400 text-sm mt-1 mb-2"
                          dangerouslySetInnerHTML={{
                            __html: truncateHTML(news?.deskripsi || "", 30),
                          }}></p>
                        <p className="text-slate-900 text-xs mt-1 mb-2">{new Date(news.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ACTIVATE */}
            <div className="mt-10 mb-8">
              <h4 className="font-semibold text-lg text-slate-900 border-b pb-2 mb-4">Aktivitas Terbaru</h4>
              <div className="space-y-4 w-full">
                {allActivate.slice(0, 5).map((news) => (
                  <Link to={news?.url} key={news.id} className="w-full">
                    <div className="flex   w-full mt-4">
                      <img src={`https://img.youtube.com/vi/${news.videoId}/0.jpg`} alt={news.nama} className="w-full h-28   rounded" />
                      <div className="w-full ms-3">
                        <p className=" text-slate-900 leading-tight text-sm"> {news.nama.length > 100 ? news.nama.slice(0, 100) + "..." : news.nama}</p>

                        <p className="text-slate-900 text-xs mt-1 mb-2">{new Date(news.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
