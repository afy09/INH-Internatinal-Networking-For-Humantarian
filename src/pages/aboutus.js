import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AboutImg from "../assets/images/bg-about.png";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Navbar from "../components/navbar";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function AboutUs() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Latar Belakang</h5>
            </div>

            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white">
                <Link to="/">INH</Link>
              </li>
              <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">
                Latar Belakang
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:m-auto after:w-96 after:h-96 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800 lg:me-6">
              <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                <img src={AboutImg} alt="" />

                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link
                    to="#!"
                    onClick={() => setOpen(true)}
                    className="lightbox lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="RJUI_OtyyxE" onClose={() => setOpen(false)} />
            <div className="">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                <span className="font-bold">Tentang Kami</span> <br />
              </h3>
              <p className="text-slate-400 max-w-xl">
                "International Networking for Humanitarian (INH) adalah lembaga kemanusiaan yang lahir sebagai jawaban dari keinginan banyak masyarakat Indonesia untuk menyalurkan rasa cinta mereka kepada Palestina secara langsung diwakili
                oleh seseorang dari tanah air kita di tanah suci Palestina. Jawaban itu akhirnya digapai pada tahun 2018, saat agresi Israel menargetkan para demonstran damai Palestina yang memprotes untuk dihapuskannya blokade yang
                mengepung Gaza lebih dari satu dekade. Cara damai telah dilakukan warga Palestina, bahkan mereka pun dipersekusi karena itu."
              </p>

              <p className="text-slate-400 max-w-xl">
                "Hal ini berawal dari banyaknya permintaan masyarakat Indonesia melalui aktivis dan relawan kemanusiaan asal Indonesia di Jalur Gaza, Muhammad Husein, untuk menyalurkan bantuan mereka melalui dirinya. Banyaknya permintaan
                ini yang mewujudkan didirikannya INH. INH lahir dari dorongan kuat masyarakat untuk bisa menyalurkan bantuan mereka melalui orang Indonesia yang berada langsung di Palestina. Maka didirikanlah INH resmi secara hukum pada 6
                Juni 2018 di bawah komando Muhammad Husein dan beberapa aktivis kemanusiaan yang direkrutnya."
              </p>
            </div>
          </div>

          <div className="mt-20 w-full">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              <span className="font-bold">Latar Belakang</span> <br />
            </h3>
            <p className="text-slate-400 ">
              Di tengah kemajuan peradaban abad ke-21, dunia masih menyaksikan sebuah anomali yang mencengangkan: konflik Palestina-Israel. Ini bukan sekadar krisis regional, melainkan sebuah isu milenium yang menantang konsep kemanusiaan
              dan keadilan global. Palestina berdiri sebagai bukti nyata bahwa di era modern ini, masih ada bangsa yang hidup di bawah penindasan, pembatasan, dan ancaman genosida di depan mata dunia. Paradoks ini menjadi latar belakang
              yang kuat bagi kelahiran International Networking for Humanitarian (INH), sebuah organisasi yang didirikan oleh Muhammad Husein Gaza dengan visi untuk mengubah paradigma bantuan kemanusiaan.
            </p>

            <p className="text-slate-400 mt-6">
              Berawal dari kepedulian mendalam terhadap kondisi Palestina, Muhammad Husein Gaza telah lama berjuang untuk meningkatkan pemahaman dan perhatian terhadap isu-isu kemanusiaan di wilayah ini. Selama lebih dari satu dekade,
              Husein menjadi saksi hidup penderitaan yang tak terbayangkan di Gaza. Dua belas tahun pengalaman langsung di wilayah konflik ini telah membuka matanya terhadap kegagalan sistemik komunitas internasional dalam menangani krisis
              kemanusiaan terbesar di era milenium.
            </p>

            <p className="text-slate-400 mt-6">
              Husein menyaksikan sendiri betapa besar kebutuhan akan bantuan logistik, dukungan pendidikan bagi anak-anak Palestina, serta kebutuhan dasar seperti sandang dan pangan. Namun, ia juga menyadari bahwa bantuan jangka pendek dan
              fokus pada logistik semata tidak cukup untuk mengatasi akar permasalahan. Lebih memprihatinkan lagi, ia mengamati bagaimana bantuan konvensional justru mulai mengikis harga diri dan kemandirian warga Palestina.
            </p>
            <p className="text-slate-400 mt-6">
              Pada awal kunjungannya ke Gaza, Husein menemukan bahwa masyarakat Palestina memiliki harga diri yang tinggi. Mereka akan mengarahkan bantuan ke tetangga yang lebih membutuhkan ketika ada yang membawa bantuan. Namun, seiring
              waktu, Husein menyaksikan perubahan mentalitas ini. Ketergantungan pada bantuan luar mulai terbentuk, mengancam etos kerja dan kemandirian yang sebelumnya menjadi ciri khas masyarakat Gaza.
            </p>
            <p className="text-slate-400 mt-6">
              Realitas pahit ini menjadi katalis bagi Husein untuk mendirikan INH, sebuah lembaga yang berkomitmen untuk fokus murni pada aspek kemanusiaan, tanpa terkontaminasi oleh agenda politik atau kepentingan kelompok tertentu. INH
              lahir dari kesadaran bahwa mayoritas organisasi bantuan internasional, meskipun dengan niat baik, seringkali terjebak dalam jaring-jaring kepentingan politik yang kompleks. Alih-alih berdiri teguh pada prinsip kemanusiaan,
              banyak lembaga besar dunia yang, disadari atau tidak, menjadi perpanjangan tangan dari agenda politik tertentu.
            </p>
            <p className="text-slate-400 mt-6">
              Husein berargumen bahwa politisasi bantuan kemanusiaan ini bukan hanya menodai esensi dari misi kemanusiaan itu sendiri, tetapi juga secara langsung berkontribusi pada perpetuasi konflik. Ketika bantuan menjadi alat
              tawar-menawar politik, penderitaan rakyat Palestina semakin diperpanjang, dan prospek perdamaian semakin menjauh. INH, karenanya, diposisikan sebagai antitesis dari pendekatan yang telah gagal ini.
            </p>
            <p className="text-slate-400 mt-6">
              Dalam merumuskan pendekatan INH, Husein terinspirasi oleh ajaran Nabi Muhammad SAW tentang pemberian bantuan yang memberdayakan. Ia merujuk pada sebuah hadis di mana Nabi mengirimkan minyak sebagai bantuan. Dalam tradisi Arab,
              minyak memiliki multipurpose: untuk cocolan makanan, pengobatan, dan sebagai bahan bakar lampu. Bagi Husein, ini menjadi metafora kuat tentang bagaimana bantuan seharusnya tidak hanya memenuhi kebutuhan sesaat, tetapi juga
              memberikan alat bagi penerima untuk meningkatkan kualitas hidup mereka secara mandiri.
            </p>
            <p className="text-slate-400 mt-6">
              Prinsip ini kemudian menjadi pondasi filosofis bagi pendekatan inovatif yang diusung oleh INH. Organisasi ini tidak hanya bertujuan untuk menyalurkan bantuan logistik dan kebutuhan dasar, tetapi juga berupaya untuk memberikan
              pendidikan yang layak bagi anak-anak Palestina, serta memberdayakan masyarakat lokal agar dapat mandiri dan sejahtera.
            </p>
            <p className="text-slate-400 mt-6">
              INH lahir bukan sekadar sebagai entitas baru dalam lanskap crowded organisasi kemanusiaan, melainkan sebagai manifesto hidup dari sebuah paradigma baru. Organisasi ini menantang status quo dengan memposisikan diri bukan
              sebagai pemberi bantuan tradisional, tetapi sebagai katalisator pemberdayaan. Visi INH melampaui konsep bantuan konvensional; ia bertujuan untuk merevolusi hubungan antara donatur dan penerima bantuan, mentransformasinya dari
              dinamika ketergantungan menjadi kemitraan yang setara dan produktif.
            </p>
            <p className="text-slate-400 mt-6">
              Pendekatan INH yang berfokus pada pemberdayaan bukan tanpa dasar empiris. Husein menyaksikan bagaimana, ketika diberi kesempatan dan sumber daya yang tepat, masyarakat Gaza menunjukkan resiliensi dan kreativitas yang luar
              biasa. Contoh nyata dari sebuah perusahaan garmen yang bangkit kembali setelah mendapat suntikan dana strategis menjadi bukti kuat bahwa pemberdayaan ekonomi bukan hanya teori abstrak, tetapi solusi konkret yang dapat mengubah
              narasi penderitaan menjadi kisah sukses kemandirian.
            </p>
            <p className="text-slate-400 mt-6">
              INH berkomitmen untuk mengubah paradigma hubungan antara donatur dan penerima. Alih-alih menciptakan ketergantungan, INH mendorong kemitraan yang setara, di mana masyarakat Palestina dipandang bukan sebagai korban pasif,
              melainkan sebagai agen aktif dalam pembangunan masa depan mereka sendiri. Husein melihat potensi untuk mentransformasi hubungan ini menjadi seperti hubungan antara investor dan pengusaha, di mana kedua belah pihak memiliki
              kepentingan dan tanggung jawab yang setara dalam keberhasilan suatu inisiatif.
            </p>
            <p className="text-slate-400 mt-6">
              Namun, Husein menyadari bahwa transformasi ini tidak mungkin dicapai oleh satu entitas secara sendirian. Ia mengkritisi kecenderungan organisasi non-pemerintah untuk berkompetisi alih-alih berkolaborasi, sebuah pendekatan yang
              ia yakini justru melemahkan dampak kolektif upaya kemanusiaan. INH, karenanya, tidak hanya hadir sebagai pelaksana program, tetapi juga sebagai jembatan yang mempromosikan sinergi antar lembaga, mendorong pertukaran
              pengetahuan dan sumber daya untuk memaksimalkan dampak bantuan yang diberikan.
            </p>
            <p className="text-slate-400 mt-6">
              Pendirian INH juga merupakan respons terhadap kegagalan komunitas internasional dalam menyelesaikan konflik Palestina-Israel. Husein berargumen bahwa jika krisis kemanusiaan terbesar di era milenium ini gagal mendapatkan
              resolusi yang adil, maka ada yang fundamental salah dengan pendekatan global terhadap konflik dan bantuan kemanusiaan. Jika bencana kemanusiaan sebesar ini tidak berhasil mendapatkan perhatian dunia yang memadai, bagaimana
              mungkin krisis-krisis yang lebih kecil bisa diharapkan untuk mendapat penanganan yang layak?
            </p>
            <p className="text-slate-400 mt-6">
              INH, dengan demikian, memposisikan diri tidak hanya sebagai organisasi bantuan, tetapi juga sebagai think tank yang aktif menyuarakan perspektif baru dalam diskursus global tentang resolusi konflik dan pembangunan perdamaian.
              Organisasi ini berjuang untuk mengembalikan fokus pada esensi kemanusiaan yang murni, membersihkan arena bantuan internasional dari manipulasi politik dan kepentingan sepihak.
            </p>
            <p className="text-slate-400 mt-6">
              Dalam esensinya, INH adalah manifestasi dari keyakinan bahwa perubahan nyata dan berkelanjutan di Palestina—dan pada akhirnya di zona konflik lainnya—hanya mungkin terjadi melalui pendekatan holistik yang menggabungkan bantuan
              darurat dengan pemberdayaan jangka panjang, independensi politik dengan kolaborasi internasional, serta sensitivitas budaya dengan inovasi global. Ini adalah sebuah panggilan untuk mengubah narasi dari “membantu korban”
              menjadi “memberdayakan agen perubahan”, dari menciptakan ketergantungan menjadi membangun kemandirian.
            </p>
            <p className="text-slate-400 mt-6">
              Dengan visi yang ambisius namun dilandasi oleh analisis mendalam dan pengalaman langsung, INH berdiri sebagai beacon of hope di tengah lanskap kemanusiaan yang sering kali terjebak dalam siklus bantuan yang tidak
              berkelanjutan. Organisasi ini menantang dunia untuk memikirkan kembali konsep bantuan kemanusiaan, mengajak setiap individu dan institusi untuk melihat melampaui statistik dan melihat potensi manusia di balik setiap krisis.
            </p>
            <p className="text-slate-400 mt-6">
              INH adalah pengingat bahwa di tengah kompleksitas politik global, kita tidak boleh kehilangan kompas moral kita. Bahwa dalam menghadapi krisis milenium seperti konflik Palestina-Israel, kita harus kembali pada prinsip dasar
              kemanusiaan: menolong sesama tanpa syarat, memberdayakan yang lemah, dan berjuang untuk keadilan bagi semua. Melalui INH, Husein dan timnya tidak hanya bermimpi tentang Palestina yang damai dan makmur, tetapi aktif memetakan
              dan membangun jalan menuju realitas tersebut, satu program pemberdayaan pada satu waktu.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
