import React from 'react';

function WhatIsIt() {
  return (
    <section className="flex-1 text-center" data-aos="fade-up" data-aos-delay="800">
      <div className="">
        {/* Section header */}
        {/* <div className="pt-20 pb-[7rem] max-w-4xl mx-auto flex flex-col items-center text-center border-b-[2px] border-solid border-purple-400"> */}
        <div>
          <h2
            className="h2 mb-5 text-purple-900 leading-[1.5]
            "
          >
            What is OpenFeature?
          </h2>
          <p className="text-xl text-purple-900">
            OpenFeature is an open standard that provides a vendor-agnostic, community-driven API for feature flagging
            that works with your favorite feature flag management tool.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsIt;
