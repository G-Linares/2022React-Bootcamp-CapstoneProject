import React from "react";
//will comment this section since it was asked for in previous revisions
// import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider_Carousel/Slider";
import Footer from '../components/Footer/Footer';
import Grid from "../components/Grid/Grid";

//importing mock data
// import FeaturedBanners from "../mocks/es-mx/featured-banners.json"; 
//importing carousel data
import ProdcutCategories from "../mocks/es-mx/product-categories.json";
//importing grid mock data
import FeaturedProducts from "../mocks/es-mx/featured-products.json"
import HeroA from "../components/HeroA/HeroA";


const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Hero slides={FeaturedBanners.results}/> */}
      <HeroA />
      <Slider categories={ProdcutCategories.results}/>
      <Grid products={FeaturedProducts.results} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
