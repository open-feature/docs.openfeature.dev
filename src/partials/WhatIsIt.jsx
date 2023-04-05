import React from 'react';

function WhatIsIt() {
  return (
    <section data-aos="fade-up" data-aos-delay="800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4 text-purple-400">What is OpenFeature?</h2>
            <p className="text-xl text-gray-200">
              OpenFeature is an open standard that provides a vendor-agnostic, community-driven API for feature flagging
              that works with your favorite feature flag management tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsIt;
