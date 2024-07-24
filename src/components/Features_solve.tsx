import React from 'react';

import { CheckCircleIcon } from '@heroicons/react/solid';

import config from '../config/index.json';

const FeaturesSolve = () => {
  const { featuresSolve } = config;
  const { title, subtitle, description, items: featuresList } = featuresSolve;
  return (
    <div className={`py-12 bg-background mt-20`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-border sm:text-4xl text-center">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="relative display flex"
                style={{ justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <div
                  className="display flex"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <CheckCircleIcon
                    className="h-7 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0">
                    &nbsp; {feature.name}
                  </span>
                </div>

                <div className="mt-10 pl-10">
                  <img src={feature.icon} width={'100px'} />
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 mobileFeatures">
          <p
            className={`text-gray-600 text-2xl`}
            style={{
              alignItems: 'center',
              lineHeight: '2',
            }}
          >
            在XX充電樁工作室中，我們專注於家用充電樁的設置，我們的安裝技術不僅確保充電樁的高效運作，且能夠符合社區的各種限制，甚至連管委會的申請文件，我們都會協助你準備
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSolve;
