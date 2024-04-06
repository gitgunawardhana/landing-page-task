import React from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="xl:px-52">
        <SectionOne />
        <SectionTwo />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
