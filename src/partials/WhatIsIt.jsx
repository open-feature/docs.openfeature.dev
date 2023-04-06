import React from 'react';

function WhatIsIt() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="pt-20 pb-20 max-w-4xl mx-auto flex flex-col items-center text-center border-b-[2px] border-solid border-purple-400">
          <h2
            className="h2 mb-3 text-white leading-[1.5]
            "
          >
            What is OpenFeature?
          </h2>
          <p className="text-xl text-purple-200">
            OpenFeature is an open standard that provides a vendor-agnostic, community-driven API for feature flagging
            that works with your favorite feature flag management tool.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsIt;
