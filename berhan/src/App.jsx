import MainHome from "./pages/Homepage/MainHome";
import MainServices from "./pages/Services/MainServices";
import MainContact from "./pages/Contact/MainContact";
import MainWhyUs from "./pages/WhyUs/MainWhyUs";
import MainBlog from "./pages/Blog/MainBlog";
import MainNews from "./pages/News/MainNews";
import MainQuote from "./pages/Quote/MainQuote";
import MainAbout from "./pages/About/MainAbout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/services" element={<MainServices />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/why-us" element={<MainWhyUs />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="/news" element={<MainNews />} />
        <Route path="/quote" element={<MainQuote />} />
        <Route path="/about" element={<MainAbout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;