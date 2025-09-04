import "./css/normalize.css"
import "./css/style.css"
import "./css/all.min.css"
import Header from './components/header'
import Footer from './components/footer'
import Spinner from './components/spinner'
import Hero from "./components/hero"
import WhyChoose from "./components/WhyChoose"
import ShopByCategory from "./components/ShopByCategory"
import PrivacyPolicy from "./components/PrivacyPolicy"
import ReturnRefund from "./components/ReturnRefund"



// [Script] => Import all imgs from assets From importingScript file
import { images } from './components/importingScript';
import About from "./components/About"
import WhatWeDoSection from "./components/WhatWeDoSection"
import HowWeWork from "./components/HowWeWork"
import TailoredSolutions from "./components/TailoredSolutions"
import Terms from "./components/Terms"



import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDoSection />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/tailored-solutions" element={<TailoredSolutions />} />
        <Route path="/shop-by-category" element={<ShopByCategory />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/ReturnRefund" element={<ReturnRefund/>} />


        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;