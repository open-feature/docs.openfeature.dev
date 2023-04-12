import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

import CncfIconWhite from '@site/static/img/cncf-color-whitetext.svg';
import CncfIconBlack from '@site/static/img/cncf-color.svg';

// https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=dracula-pro&wt=none&l=application%2Ftypescript&width=763.5&ds=true&dsyoff=5px&dsblur=11px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%252F%252F%2520Providers%2520are%2520backend%2520%250AOpenFeature.setProvider%28new%2520MyProvider%28%29%29%253B%250A%250Aconst%2520featureFlags%2520%253D%2520OpenFeature.getClient%28%29%253B%250A%250Aconst%2520withCows%2520%253D%2520await%2520featureFlags.getBooleanValue%28%2522with-cows%2522%252C%2520false%29%253B%250Aif%2520%28withCows%29%2520%257B%250A%2520%2520res.send%28cowsay.say%28%257B%2520text%253A%2520%2522Hello%252C%2520world%21%2522%2520%257D%29%29%253B%250A%257D%2520else%2520%257B%250A%2520%2520res.send%28%2522Hello%252C%2520world%21%2522%29%253B%250A%257D
import CodeSnippet from '@site/static/img/code-snippet.png';

import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import FliptSvg from '@site/static/img/flipt-no-fill.svg';
import GoFeatureFlagSvg from '@site/static/img/goff-no-fill.svg';
import FlagsmithSvg from '@site/static/img/flagsmith-no-fill.svg';
import LaunchDarklySvg from '@site/static/img/launchdarkly-no-fill.svg';

import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolang } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

function FeaturesZigZag() {
  const { isDarkTheme } = useColorMode();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Open source
            </div> */}
            <h1 className="h2 mb-4">Community driven feature flagging</h1>
            {/* <p className="text-xl text-gray-500 dark:text-gray-300">
              OpenFeature is an open source CNCF sandbox project under the Apache 2 license.
            </p> */}
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              OpenFeature is an open source CNCF sandbox project under the Apache 2 license.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              Check out the project on <Link to="https://github.com/open-feature">GitHub</Link> and consider joining the{' '}
              <Link to="/community/">OpenFeature community!</Link>
            </p>
            <div>{isDarkTheme ? <CncfIconWhite /> : <CncfIconBlack />}</div>
          </div>
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={CodeSnippet}
                  width="540"
                  height="405"
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Avoid code-level lock-in</div>
                  <h3 className="h3 mb-3">Vendor neutral</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature is designed to work with any feature flag management tool or in-house solution. This
                    enables you to switch between platforms or consolidate multiple platforms much more easily.
                  </p>
                  <ul className="text-lg text-gray-500 dark:text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Continue to use your current solution</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Combine multiple solutions behind a single interface</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Try a new solution without a code refactor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <div className="max-w-full mx-auto md:max-w-none h-auto bg-grey">
                  <CloudbeesSvg style={{ height: '64px', width: '64px ' }} />
                  <SplitSvg style={{ height: '64px', width: '64px ' }} />
                  <FliptSvg style={{ height: '64px', width: '64px ' }} />
                  <GoFeatureFlagSvg style={{ height: '64px', width: '64px ' }} />
                  <FlagsmithSvg style={{ height: '64px', width: '64px ' }} />
                  <LaunchDarklySvg style={{ height: '64px', width: '64px ' }} />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Developed with the industry
                  </div>
                  <h3 className="h3 mb-3">Supports your favorite tools</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature has broad industry support, and many of the top open source and commercial tools have
                    created officially-supported providers.
                  </p>
                  <ul className="text-lg text-gray-500 dark:text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Works with your favorite vendor</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Integrates with popular open source projects</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Add support to your home grown solution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="max-w-full mx-auto md:max-w-none h-auto bg-grey">
                  <CSharpNoFillSvg style={{ height: '64px', width: '64px ' }} />
                  <FontAwesomeIcon className="h-[64px] w-[64px]" icon={faGolang} />
                  <FontAwesomeIcon className="h-[64px] w-[64px]" icon={faJava} />
                  <FontAwesomeIcon className="h-[64px] w-[64px]" icon={faSquareJs} />
                  <FontAwesomeIcon className="h-[64px] w-[64px]" icon={faPhp} />
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Ultimate flexibility</div>
                  <h3 className="h3 mb-3">Speaks your language</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature supports many of the top programming languages, with more on the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigZag;
