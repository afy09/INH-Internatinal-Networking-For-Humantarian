import React, { useEffect, useState } from "react";
import { PiHandHeart } from "react-icons/pi";

const DonasiList = ({ campaignId }) => {
  const [donasi, setDonasi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!campaignId) return;

    const fetchDonasi = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/campaign/${campaignId}/donasi`);

        const result = await response.json();

        if (result?.data) {
          setDonasi(result.data); // data array donasi
        }
      } catch (error) {
        console.error("Error fetching donasi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonasi();
  }, [campaignId]);

  if (loading) {
    return (
      <div className="mt-4 mb-8 border border-gray-800 rounded-lg p-5 text-center">
        <h3>Loading Donasi...</h3>
      </div>
    );
  }

  return (
    <div className="mt-4 mb-8 border border-gray-800 rounded-lg p-5">
      <div className="text-xl font-semibold mb-4">
        Donasi <span className="text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">{donasi.length}</span>
      </div>

      <div className="space-y-4">
        {donasi.length === 0 && <p className="text-gray-400 text-sm">Belum ada donasi</p>}

        {donasi.map((item) => (
          <div key={item.id} className="border-b pb-6 last:border-none">
            <div className="flex items-start mt-3">
              {/* Icon */}
              <div className="mt-1 text-amber-500">
                <PiHandHeart size={20} />
              </div>

              {/* Isi Donasi */}
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{item.pesan && item.pesan !== "" ? item.pesan : "(Tidak ada pesan / doa)"}</div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">{item.nama ?? "Anonym"}</span> Berdonasi sebesar <span className="font-semibold text-amber-500">Rp {Number(item.nominal).toLocaleString("id-ID")}</span> pada{" "}
                  {new Date(item.created_at).toLocaleString("id-ID")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonasiList;
