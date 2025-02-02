import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import Home from "./WebPages/Homepage";
import About from "./WebPages/AboutPage";
import LoginPage from "./WebPages/Loginpage";
import Footer from "./Components/Footer";
import SignupPage from "./WebPages/SignupPage";
import Faqs from "./WebPages/FAQs";
import ContactUs from './WebPages/ContactUs';
import Appointment from "./WebPages/Booking";
import Diagnostics from "./WebPages/ServicePages/Diagnostics";
import DentPaint from "./WebPages/ServicePages/Dent&paint";
import Oilfilter from "./WebPages/ServicePages/Oil_Filters";
import Brakes from "./WebPages/ServicePages/Brakes";
import Detailing from "./WebPages/ServicePages/Detailing";
import Suspension from "./WebPages/ServicePages/Suspension";
import Washing from "./WebPages/ServicePages/Wash&Clean";
import Alignment from "./WebPages/ServicePages/Alignment";
import Services from './Components/Services';
import AdminDashboard from "./Components/AdminDashboard";

function App() {
return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/diagnostics" element={<Diagnostics/>}/>
        <Route path="/dent&paint" element={<DentPaint/>}/>
        <Route path="/oil-filters" element={<Oilfilter/>}/>
        <Route path="/brakes" element={<Brakes/>}/>
        <Route path="/detailing" element={<Detailing/>}/>
        <Route path="/suspension" element={<Suspension/>}/>
        <Route path="/Wash" element={<Washing/>}/>
        <Route path="/alignment" element={<Alignment/>}/>
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
