import MainHome from "./pages/Homepage/MainHome";
import MainServices from "./pages/Services/MainServices";
import MainContact from "./pages/Contact/MainContact";
import MainWhyUs from "./pages/WhyUs/MainWhyUs";
import MainAppointment from "./pages/Appointment/MainAppointment";
import MainNews from "./pages/News/MainNews";
import MainQuote from "./pages/Quote/MainQuote";

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
        <Route path="/BookAppointment" element={<MainAppointment />} />
        <Route path="/news" element={<MainNews />} />
        <Route path="/quote" element={<MainQuote />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;