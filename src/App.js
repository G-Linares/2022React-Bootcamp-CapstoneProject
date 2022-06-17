import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutUs from "./views/AboutUs";

import ScrollTotop from "./utils/hooks/ScrollTotop";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTotop>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/info" element={<AboutUs />} />
          </Routes>
        </ScrollTotop>
      </BrowserRouter>
    </div>
  );
}

export default App;
