import React from 'react';

function WhyUse() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="pt-20 pb-20 max-w-4xl mx-auto flex flex-col items-center text-center border-b-[2px] border-solid border-purple-400">
          <h2 className="h2 mb-5 text-white leading-[1.5]">Why standardize feature flags?</h2>
          <p className="text-xl text-purple-200">
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
