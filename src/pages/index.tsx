import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../css/style.css';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Footer from '../partials/Footer';
import HeroHome from '../partials/HeroHome';
import Newsletter from '../partials/Newsletter';
import PageIllustration from '../partials/PageIllustration';
import Testimonials from '../partials/Testimonials';

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
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      <Layout description="The official documentation of the OpenFeature project.">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <main className="grow">
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
              <PageIllustration />
            </div>
            <HeroHome />
            <FeaturesBlocks />
            <FeaturesZigZag />
            <Testimonials />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
