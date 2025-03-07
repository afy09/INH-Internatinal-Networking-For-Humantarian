import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import aboutImg from "../assets/images/features/bg-journey.png";
import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";

export default function AboutTwo() {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const highlightedCountries = [
    "360", // Indonesia
    "792", // Turkey
    "887", // Yemen
    "104", // Myanmar
    "760", // Syria
  ];

  // State untuk menyimpan tooltip
  const [tooltipContent, setTooltipContent] = useState({ country: "", x: 0, y: 0 });

  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg border  lg:ms-8">
              <ComposableMap projectionConfig={{ scale: 200 }}>
                <ZoomableGroup zoom={1}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies
                        .filter((geo) => geo.properties?.name !== "Antarctica") // Menyaring Antartika
                        .map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={highlightedCountries.includes(geo.id) ? "#FFC107" : "#555"}
                            stroke="#000"
                            onMouseEnter={(event) => {
                              const { clientX, clientY } = event;
                              setTooltipContent({
                                country: geo.properties?.name || "Unknown",
                                x: clientX,
                                y: clientY,
                              });
                            }}
                            onMouseLeave={() => setTooltipContent({ country: "", x: 0, y: 0 })}
                          />
                        ))
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
              {/* Tooltip */}
              {tooltipContent.country && (
                <div
                  className="absolute bg-amber-400 text-white px-2 py-1 rounded shadow-md"
                  style={{
                    left: tooltipContent.x + 10,
                    top: tooltipContent.y + 10,
                    pointerEvents: "none", // Untuk memastikan tooltip tidak mengganggu hover
                  }}>
                  {tooltipContent.country}
                </div>
              )}
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Perjalanan Kami</h4>
            <p className="text-slate-400">"Membangun komintas ini tentu sangatlah tidak mudah, tapi kami yakin untuk berfikir postif kepada komunitas ini, karna kami sudah di jalan yang benar"</p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Program berjalan 20 +
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" /> Donatur 30,372
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Negara Kerjasama 13
              </li>
              <li className="mb-2 flex items-center">
                <FiCheckCircle className="text-amber-400 h-5 w-5 me-2" />
                Penirima Manfaat 1,126,248
              </li>
            </ul>

            <div className="mt-4">
              <Link to="/aboutus" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                Lebih lihat detail <MdKeyboardArrowRight className="ms-1 text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
