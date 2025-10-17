import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import Blog from "./pages/blog";
import IndexTwo from "./pages/index-two";
import IndexThree from "./pages/index-three";
import IndexLight from "./pages/index-light";
import AboutUs from "./pages/aboutus";
import VisiMisi from "./pages/visimisi";
import Fokus from "./pages/fokus";
import Legalitas from "./pages/legalitas";
import Pricing from "./pages/pricing";
import Services from "./pages/services";
import BlogDetails from "./pages/blog-detail";
import DonasiDetails from "./pages/detailDonasi";
import Helpcenter from "./pages/helpcenter";
import Login from "./pages/login";
import Signup from "./pages/signup";
import StrukturOrganisasi from "./pages/struktur";
import ResetPassword from "./pages/reset-password";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Error from "./pages/error";
import Contact from "./pages/contact";
import DaftarProgram from "./pages/daftarprogram";
import NewsInh from "./pages/newsinh";
import Distribusi from "./pages/distribusi";
import BrandMitra from "./pages/brandmitra";
import DistribusiDetail from "./pages/distribusi-detail";
import TrackingScripts from "./hooks";
import DetailCampaign from "./pages/detailCampaign";

function App() {
  return (
    <>
      <TrackingScripts />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index-two" element={<IndexTwo />} />
        <Route path="/index-three" element={<IndexThree />} />
        <Route path="/index-light" element={<IndexLight />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/visimisi" element={<VisiMisi />} />
        <Route path="/fokus" element={<Fokus />} />
        <Route path="/legalitas" element={<Legalitas />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/services" element={<Services />} />
        <Route path="/daftarprogram" element={<DaftarProgram />} />
        <Route path="/donasi-detail/:id" element={<DonasiDetails />} />
        <Route path="/daftarprogram/detail/:id" element={<DetailCampaign />} />
        <Route path="/news/:id/:title" element={<BlogDetails />} />
        <Route path="/newsinh" element={<NewsInh />} />
        <Route path="/distribusi" element={<Distribusi />} />
        <Route path="/distribusi-detail/:id" element={<DistribusiDetail />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/brandmitra" element={<BrandMitra />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
