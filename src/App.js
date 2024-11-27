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
import Helpcenter from "./pages/helpcenter";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ResetPassword from "./pages/reset-password";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Error from "./pages/error";
import Contact from "./pages/contact";

function App() {
  return (
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
      <Route path="/services" element={<Services />} />
      <Route path="/blog-detail" element={<BlogDetails />} />
      <Route path="/blog-detail/:id" element={<BlogDetails />} />
      <Route path="/helpcenter" element={<Helpcenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
