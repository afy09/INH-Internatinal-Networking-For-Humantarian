import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import aboutImg from "../assets/images/features/bg-journey.png";
import { FiCheckCircle, MdKeyboardArrowRight } from "../assets/icons/vander";
import { geoCentroid } from "d3-geo";

export default function AboutTwo() {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const highlightedCountries = [
    "360", // Indonesia
    "792", // Turkey
    "887", // Yemen
    "104", // Myanmar
    "760", // Syria
    "148", // Chad
    "566", // Nigeria
    "728", // South Sudan
    "800", // Uganda
    "404", // Kenya
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
                    {({ geographies, projection }) => {
                      const tooltipElements = []; // Menyimpan tooltip agar dirender terakhir

                      return (
                        <>
                          {geographies
                            .filter((geo) => geo.properties?.name !== "Antarctica") // Menghapus Antartika
                            .map((geo) => {
                              const centroid = geoCentroid(geo); // Mendapatkan koordinat tengah negara
                              const [x, y] = projection(centroid); // Konversi ke posisi dalam SVG
                              const isHighlighted = highlightedCountries.includes(geo.id); // Cek apakah negara termasuk dalam daftar yang ditandai

                              // Jika negara termasuk dalam daftar, tambahkan tooltip ke array
                              if (tooltipContent.country && tooltipContent.x === x && tooltipContent.y === y - 12) {
                                tooltipElements.push(
                                  <g key={`tooltip-${geo.rsmKey}`} transform={`translate(${tooltipContent.x}, ${tooltipContent.y})`} style={{ pointerEvents: "none", zIndex: 10 }}>
                                    {/* Background Tooltip */}
                                    <rect
                                      x={-tooltipContent.country.length * 4} // Perlebar ukuran
                                      y={-16} // Tambahkan sedikit padding ke atas
                                      width={tooltipContent.country.length * 12}
                                      height={30}
                                      rx={6}
                                      ry={6}
                                      fill="#FFFFFF"
                                    />
                                    {/* Teks Tooltip */}
                                    <text x={9} y={0} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fontWeight="bold" fill="black">
                                      {tooltipContent.country}
                                    </text>
                                  </g>
                                );
                              }

                              return (
                                <Geography
                                  key={geo.rsmKey}
                                  geography={geo}
                                  fill={isHighlighted ? "#FFC107" : "#555"}
                                  stroke="#000"
                                  onMouseEnter={() => {
                                    if (isHighlighted) {
                                      setTooltipContent({
                                        country: `${geo.properties?.name || "Unknown"}`,
                                        x,
                                        y: y - 12, // Sedikit naik agar tidak menutupi negara
                                      });
                                    }
                                  }}
                                  onMouseLeave={() => setTooltipContent({ country: "", x: 0, y: 0 })}
                                />
                              );
                            })}

                          {/* Render tooltip terakhir agar tidak tertutup oleh peta */}
                          {tooltipElements}
                        </>
                      );
                    }}
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
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
