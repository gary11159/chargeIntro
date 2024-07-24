import React from 'react';

import { CheckCircleIcon } from '@heroicons/react/solid';

import config from '../config/index.json';

const Project2 = () => {
  const { project2 } = config;

  return (
    <div className={`py-12 bg-background`} id="features">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <p
          className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-border sm:text-6xl"
          style={{
            paddingBottom: '50px',
          }}
        >
          {project2.title}
        </p>
        <br></br>
        <br></br>
        <p
          className={`text-gray-600 text-2xl`}
          style={{
            paddingBottom: '50px',
            lineHeight: '1.7',
            textAlign: 'center',
          }}
        >
          {project2.subtitle}
        </p>

        <div
          className="text-gray-600 text-2xl"
          style={{
            fontSize: '20px',
          }}
        >
          {/* 第一項 */}
          <div
            className="display flex"
            style={{ width: '100%', marginLeft: '5%' }}
          >
            <CheckCircleIcon className="h-7 text-primary" aria-hidden="true" />
            <span className="text-xl text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0">
              &nbsp;實地場刊評估安裝費
            </span>
          </div>
          {/* 第二項 */}
          <div
            className="display flex"
            style={{ width: '100%', marginLeft: '5%' }}
          >
            <CheckCircleIcon className="h-7 text-primary" aria-hidden="true" />
            <span className="text-xl text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0">
              &nbsp;協助準備社區管委會所需的相關文件
            </span>
          </div>
          {/* 第三項 */}
          <div
            className="display flex"
            style={{ width: '100%', marginLeft: '5%' }}
          >
            <CheckCircleIcon className="h-7 text-primary" aria-hidden="true" />
            <span className="text-xl text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0">
              &nbsp;多項材料選擇及提供安裝建議
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
