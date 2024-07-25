import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Contanct from '../components/Contanct';
import Features from '../components/Features';
import FeaturesSolve from '../components/Features_solve';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import Project from '../components/Project';
import Project2 from '../components/Project2';

const App = () => {
  return (
    <div className={`bg-background overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto mobile">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <FeaturesSolve />
        </>
      </LazyShow>
      <LazyShow>
        <Project />
      </LazyShow>
      <LazyShow>
        <Project2 />
      </LazyShow>
      <LazyShow>
        <Contanct />
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
