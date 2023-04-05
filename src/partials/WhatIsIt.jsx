import React from 'react';

function WhatIsIt() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 text-white">What is OpenFeature?</h2>
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
