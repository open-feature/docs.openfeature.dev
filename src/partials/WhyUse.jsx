import React from 'react';

function WhyUse() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4 text-white">Why standardize feature flags?</h2>
            <p className="text-xl text-gray-200">
              Standardizing feature flags unify tools and vendors behind a common interface which avoids vendor lock-in
              at the code level. Additionally, it offers a framework for building extensions and integrations and allows
              providers to focus on their unique value proposition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUse;
