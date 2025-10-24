import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCalendar } from "../assets/icons/vander";
import { FaCopy, FaRegEye, FaRegUser, FaShareAlt } from "react-icons/fa";
import NavbarBerita from "../components/navbarberita";

export default function BlogDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [allCampaign, setAllCampaign] = useState([]);
  const [allActivate, setAllActivate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const slugTitle = data?.title
    ?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
  const shareUrl = `${process.env.REACT_APP_API_BASE_URL}/share/news/${id}/${slugTitle}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.title} - ${shareUrl}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000); // kembali ke normal setelah 1 detik
  };

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
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}`);
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
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/news`);
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
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/aktivitas-terbaru?per_page=5`);
        const result = await response.json();
        const items = result.data; // <--- ambil arraynya di `data`

        if (items) {
          const dataWithVideoId = items.map((item) => {
            const url = new URL(item.url);
            const videoId = url.searchParams.get("v");
            return { ...item, videoId };
          });

          setAllActivate(dataWithVideoId);
        }
      } catch (error) {
        console.error("Error fetching all news:", error);
      }
    };

    const hitViewEndpoint = async () => {
      try {
        await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}/view`, {
          method: "POST",
        });
      } catch (error) {
        console.error("Error hitting view endpoint:", error);
      }
    };

    fetchData();
    fetchAllNews();
    fetchAllCampaign();
    fetchAllActivate();
    hitViewEndpoint();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="w-11 h-11 border-4  border-t border-amber-400/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
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
      <NavbarBerita />
      <section className="md:pt-36 pt-32 bg-white ps-4 pe-4 lg:px-20">
        <div className=" md:flex lg:gap-2">
          <div className="lg:w-2/3 md:w-4/5">
            <Link to="#" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
              {data.category?.nama}
            </Link>
            <div className="text-3xl font-bold mt-3 text-slate-900">{data?.title}</div>
            <div className="flex gap-6 flex-wrap items-center mt-2 ">
              <div className="flex-api items-center  text-slate-400">
                <FaRegUser className="h-4 w-4" />
                <h6>
                  <Link to="#" className="font-medium hover:text-amber-400 ms-2">
                    {data.user?.name}
                  </Link>
                </h6>
              </div>
              <div className="text-slate-400 text-sm flex-api  items-center ">
                <FiCalendar className="h-4 w-4" />
                <span className="ms-2">{new Date(data.created_at).toLocaleDateString()}</span>
              </div>

              {/* <div className="flex items-center gap-2 text-slate-400">
                <FaShareAlt />
                <a href={`https://wa.me/?text=${encodeURIComponent(data.title + " - " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="">
                  Share
                </a>
              </div> */}

              <div onClick={handleCopy} className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <FaCopy />
                <span className="">{copied ? "Berhasil di-copy!" : "Salin URL"}</span>
              </div>

              {/* <div className="text-slate-400 text-sm flex-api  items-center ">
                <FaRegEye className="h-4 w-4" />
                <span className="ms-2">Total View : {data?.views_count}</span>
              </div> */}
            </div>

            <img src={data.image} className="rounded-md shadow mt-5" alt={data.title} />
            <p className="text-slate-900 mt-2 mb-2 italic">{data.caption}</p>
            <p className="text-gray-700 text-lg mt-3 mb-8" dangerouslySetInnerHTML={{ __html: data?.deskripsi }}></p>
          </div>

          {/* BERITA, CAMPAIGN, ACTIVATE */}
          <aside className="lg:w-1/3 mt-10 md:mt-0 ">
            <h4 className="font-semibold text-lg text-slate-900 border-b pb-2 mb-4">Berita Lainnya</h4>
            {/* BERITA */}
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
