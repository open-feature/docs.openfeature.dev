import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../css/style.css';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import HeroHome from '../partials/HeroHome';
import PageIllustration from '../partials/PageIllustration';
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
            <div className="relative h-0 pointer-events-none" aria-hidden="true">
              <PageIllustration />
            </div>
            <HeroHome />
            <div className="flex justify-center">
              <section className="bg-purple-900 w-full border-solid border-8 border-purple-400 max-w-[1550px] rounded-[250px] mb-20 pt-10 px-20 sm:mx-5 md:mx-20">
                <WhatIsIt />
                <WhyUse />
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
