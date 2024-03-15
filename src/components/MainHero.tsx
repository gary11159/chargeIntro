import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">{mainHero.title}</span>{' '}
          <span className={`block text-yellow-700 text-3xl`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
          <div>⭐完整的事前場地規劃，完整提供施工的大小細節給你！</div>
          <div>⭐協助和貴社區委員會做調解</div>
          <div>⭐施工後的兩年售後保固</div>
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-10 py-1 text-2xl font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">加入Line免費諮詢</span>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
