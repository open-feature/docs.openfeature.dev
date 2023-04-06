import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../css/style.css';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import HeroHome from '../partials/HeroHome';
import PageIllustrationLines from '../partials/PageIllustrationLines';
import WhatIsIt from '../partials/WhatIsIt';
import WhyUse from '../partials/WhyUse';

export default function Home(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <div className="font-inter antialiased bg-purple-100 text-white tracking-tight">
      <Layout description="The official documentation of the OpenFeature project.">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <main className="grow">
            <div className="relative h-0 pointer-events-none opacity-40" aria-hidden="true">
              <PageIllustrationLines />
            </div>
            <HeroHome />
            <div className="flex justify-center">
              <section
                className="
                  relative 
                  content-container 
                  bg-purple-900 
                  border-solid 
                  border-t-[10px] 
                  border-purple-500 
                  w-full 
                  max-w-[1350px] 
                  pt-0 
                  pb-20 
                  px-3 
                  mb-0 
                  sm:rounded-none 
                  md:rounded-[250px] 
                  md:border-[10px] 
                  md:pt-10 
                  md:pb-10 
                  md:px-20 
                  md:mb-20
                  sm:mx-0 
                  md:mx-10"
              >
                <div>
                  <WhatIsIt />
                  <WhyUse />
                </div>
                <FeaturesBlocks />
                {/* <FeaturesZigZag /> */}
                {/* <Testimonials /> */}
                {/* <Newsletter /> */}
              </section>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </Layout>
    </div>
  );
}
