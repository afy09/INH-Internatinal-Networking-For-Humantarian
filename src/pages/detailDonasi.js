import React, { useEffect, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import BcaLogo from "../assets/images/client/path_to_bca_logo.png";
import BniLogo from "../assets/images/client/path_to_bni_logo.png";
import BriLogo from "../assets/images/client/path_to_bri_logo.png";
import MandiriLogo from "../assets/images/client/path_to_mandiri_logo.png";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function DonasiDetails() {
  const { id } = useParams(); // Mendapatkan ID dari parameter URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nominal, setNominal] = useState(""); // State untuk nominal donasi
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethods = [
    { id: "bca", name: "BCA", logo: BcaLogo },
    { id: "bni", name: "BNI", logo: BniLogo },
    { id: "bri", name: "BANK BRI", logo: BriLogo },
    { id: "mandiri", name: "Mandiri", logo: MandiriLogo },
  ];

  const handlePaymentSelect = (e, id) => {
    e.preventDefault(); // Mencegah default behavior
    setSelectedPayment(id); // Mengatur metode pembayaran yang dipilih
  };

  // Daftar nominal yang akan di-mapping
  const nominalOptions = [10000, 30000, 50000, 80000, 100000];

  const handleNominalClick = (e, value) => {
    e.preventDefault(); // Mencegah default behavior
    setNominal(value); // Update nilai input saat tombol ditekan
  };

  useEffect(() => {
    // Mengatur tema
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    // Fetch data berdasarkan ID
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.rekapitung.id/api/campaign/${id}`);
        const result = await response.json();
        if (result?.data) {
          setData(result.data); // Ambil data dari respons
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
      <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 md:w-4/5">
              <Link to="" className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">
                Donasi
              </Link>
              <h5 className="md:text-4xl text-3xl font-bold md:tracking-normal tracking-normal md:leading-normal leading-normal mt-3">{data.title}</h5>
              <div className="">
                <img src={data.image} className="rounded-md shadow dark:shadow-gray-700 mt-5" alt={data.title} />
              </div>
              <p className="text-slate-400 text-lg mt-3">{data.deskripsi}</p>

              <div className="mt-5">
                <form className="text-start mt-4">
                  <div className="grid grid-cols-1">
                    <div>
                      <label className="font-semibold" htmlFor="RegisterName">
                        Masukkan Nominal Donasi:
                      </label>

                      {/* Mapping tombol pilihan nominal */}
                      <div className="flex gap-6 mt-3 flex-wrap">
                        {nominalOptions.map((value) => (
                          <div>
                            <button
                              type="submit"
                              key={value}
                              className={`py-2 px-4 rounded border border-amber-400 ${nominal === value.toString() ? "bg-amber-400 text-white" : "bg-gray-200"}`}
                              onClick={(e) => handleNominalClick(e, value.toString())}>
                              Rp {value.toLocaleString("id-ID")}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Input untuk nominal */}
                      <input
                        id="RegisterName"
                        type="text"
                        value={nominal}
                        onChange={(e) => setNominal(e.target.value)} // Input manual
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Masukkan nominal lainnya"
                      />
                    </div>

                    {/* METODE PEMBAYARAN */}
                    <div className="mt-5">
                      <h3 className="font-semibold mb-3">Pilih Metode Pembayaran : </h3>
                      <div className="flex gap-6 flex-wrap">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            onClick={(e) => handlePaymentSelect(e, method.id)}
                            className={`relative border-2 rounded p-2 flex justify-center bg-white items-center ${selectedPayment === method.id ? "border-amber-400 bg-gray-100" : "border-gray-300"}`}>
                            <img src={method.logo} alt={method.name} className="w-16 h-10 object-contain rounded-md" />
                            {selectedPayment === method.id && <div className="absolute -top-2 -right-2 bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center">✓</div>}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* PESAN DAN DOA */}
                    <div className="mb-4 mt-8">
                      <label className="font-semibold" htmlFor="RegisterName">
                        Pesan Doa atau Dukungan (opsional):
                      </label>
                      <textarea
                        rows={4}
                        className="mt-3 w-full py-2 px-3  bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="Tulis pesan doa dan dukunganmu disini"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="font-semibold" htmlFor="LoginEmail">
                        Email :
                      </label>
                      <input
                        id="LoginEmail"
                        type="email"
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="font-semibold" htmlFor="LoginEmail">
                        Nomor Handphone / WhatsApp :
                      </label>
                      <input
                        type="number"
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                        placeholder="0812345....."
                      />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center w-full mb-0">
                        <input
                          className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-amber-400 focus:border-amber-300 focus:ring focus:ring-offset-0 focus:ring-amber-200 focus:ring-opacity-50 me-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="AcceptT&C"
                        />
                        <label className="form-check-label text-slate-400 cursor-pointer" htmlFor="AcceptT&C">
                          Sembunyikan nama saya{" "}
                          <Link to="" className="text-amber-400">
                            (donasi sebagai anonim)
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <input
                        type="submit"
                        className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amberbg-amber-500 text-white rounded-md w-full"
                        value="Lanjut Pembayaran"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
