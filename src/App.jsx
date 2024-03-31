import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { WhatWeDo } from './components/WhatWeDo/WhatWeDo';
import { OrganicGoods } from './components/OrganicGoods/OrganicGoods';
import { ArticlesAndTips } from './components/ArticlesAndTips/ArticlesAndTips';
import { OurPartners } from './components/OurPartners/OurPartners';
import { Footer } from './components/Footer/Footer';
import { FarmLocationsMap } from './components/FarmLocationsMap/FarmLocationsMap';
import { ScrollUp } from './components/Common/ScrollUp/ScrollUp';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Favicon from 'react-favicon';
import NotFound from './components/NotFound/NotFound';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Favicon url="favicon.ico" />
              <Header />
              <main>
                <Hero />
                <WhatWeDo />
                <OrganicGoods />
                <ArticlesAndTips />
                <FarmLocationsMap />
                <OurPartners />
              </main>
              <Footer />
              <ScrollUp />
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
