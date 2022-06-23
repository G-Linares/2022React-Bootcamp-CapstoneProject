import React from "react";
//will comment this section since it was asked for in previous revisions
// import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";

import Footer from '../components/Footer/Footer';
import Grid from "../components/Grid/Grid";
import Slider from "../components/Slideshow/Slider";
import CardSlider from "../components/CardSlider/CardSlider";

//importing mock data
import FeaturedBanners from "../mocks/es-mx/featured-banners.json";
//importing carousel data
import ProductCategories from "../mocks/es-mx/product-categories.json";
//importing grid mock data
import FeaturedProducts from "../mocks/es-mx/featured-products.json"
import HeroA from "../components/HeroA/HeroA";


const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Hero slides={FeaturedBanners.results}/> */}
      <HeroA />
      <Slider banners={FeaturedBanners.results}/>
      <CardSlider categories={ProductCategories.results} />
      <Grid products={FeaturedProducts.results} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
