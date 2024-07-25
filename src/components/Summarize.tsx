import React from 'react';

import { CheckCircleIcon } from '@heroicons/react/solid';

import config from '../config/index.json';

const Summarize = () => {
  const { summarize } = config;
  const { title, subtitle } = summarize;

  return (
    <div
      className="summarize"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundImage: "url('/assets/images/last2.png')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mt-2 font-extrabold tracking-tight text-white sm:text-5xl"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {title}
        </div>
        <div
          className={`mt-2 font-extrabold tracking-tight text-white sm:text-5xl`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '50px',
          }}
        >
          {subtitle}
        </div>

        {/* 第一項 */}
        <div
          className="display flex"
          style={{ width: '100%', marginLeft: '10%' }}
        >
          <CheckCircleIcon className="h-7 text-white" aria-hidden="true" />
          <span className="text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0 text-white">
            &nbsp;實地場刊評估安裝費
          </span>
        </div>
        {/* 第二項 */}
        <div
          className="display flex"
          style={{ width: '100%', marginLeft: '10%' }}
        >
          <CheckCircleIcon className="h-7 text-white" aria-hidden="true" />
          <span className="text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0 text-white">
            &nbsp;協助準備社區管委會所需的相關文件
          </span>
        </div>
        {/* 第三項 */}
        <div
          className="display flex"
          style={{ width: '100%', marginLeft: '10%' }}
        >
          <CheckCircleIcon className="h-7 text-white" aria-hidden="true" />
          <span className="text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0 text-white">
            &nbsp;多項材料選擇及提供安裝建議
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className={`block text-black-700 text-xl`}>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-10 py-1 text-2xl font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20 shadow-xl floatingButton">
              加入Line免費諮詢
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summarize;
