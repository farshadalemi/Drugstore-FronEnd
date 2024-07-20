import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopProducts } from "./layouts/HomePage/ExploreTopProducts";
import Card from "./layouts/HomePage/SpecialOffer/Card";
import FeaturedProductsHairLoss from "./layouts/HomePage/FeaturedProductsHairLoss";
import FeaturedProductsDental from "./layouts/HomePage/FeaturedProductsDental";
import FeaturedProductsAcne from "./layouts/HomePage/FeaturedProductsAcne";
import FeaturedProductsVitamin from "./layouts/HomePage/FeaturedProductsVitamin";
import CountdownCard from "./layouts/HomePage/SpecialOffer/CountdownCard";
import VideoCallToDoctor from "./layouts/HomePage/VideoCallToDoctor";
import { Footer } from "./layouts/HomePage/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopProducts />
      <div className="container-fluid py-5 text-white">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col mb-4">
            <FeaturedProductsHairLoss />
          </div>
          <div className="col mb-4">
            <FeaturedProductsDental />
          </div>
          <div className="col mb-4">
            <FeaturedProductsAcne />
          </div>
          <div className="col mb-4">
            <FeaturedProductsVitamin />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 text-white bg-info" >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6  mt-4">
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4">
            <Card />
          </div>
          <div className="col mb-4 mt- ">
            <CountdownCard />
          </div>
        </div>
      </div>
      <VideoCallToDoctor/>
      <Footer/>
    </div>
  );
}

export default App;
