
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { WhatWeDo } from "./components/WhatWeDo/WhatWeDo";
import { OrganicGoods } from "./components/OrganicGoods/OrganicGoods";
import { ArticlesAndTips } from "./components/ArticlesAndTips/ArticlesAndTips";
import { OurPartners } from "./components/OurPartners/OurPartners";
import { Footer } from "./components/Footer/Footer";
import { FarmLocationsMap } from "./components/FarmLocationsMap/FarmLocationsMap";


function App() {


  return (
    <>
      <Header />
      <Hero />
      <WhatWeDo />
      <OrganicGoods />
      <ArticlesAndTips/>
      <OurPartners />
      <FarmLocationsMap/>
      <Footer/>
    </>
  );
}

export default App;
