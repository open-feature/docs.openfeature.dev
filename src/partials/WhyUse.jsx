import React from 'react';

function WhyUse() {
  return (
    <section className="flex-1 text-center" data-aos="fade-up" data-aos-delay="1200">
      <div className="">
        {/* Section header */}
        {/* <div className="py-[7rem] max-w-4xl mx-auto flex flex-col items-center text-center border-b-[2px] border-solid border-purple-400"> */}
        <div>
          <h2 className="h2 mb-5 text-purple-900 leading-[1.5]">Why standardize feature flags?</h2>
          <p className="text-xl text-purple-900">
            Standardizing feature flags unify tools and vendors behind a common interface which avoids vendor lock-in at
            the code level. Additionally, it offers a framework for building extensions and integrations and allows
            providers to focus on their unique value proposition.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUse;
