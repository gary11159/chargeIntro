import React from 'react';

import config from '../config/index.json';
import LazyShow from './LazyShow';
import Summarize from './Summarize';

const Contanct = () => {
  const { contanct } = config;
  const { title, subtitle, description, description2 } = contanct;

  return (
    <div>
      <div
        className={`py-12 mobileContanct pb-20`}
        id="contanct"
        style={{
          backgroundColor: '#F7F9FF',
        }}
      >
        <div className="px-4 mobileContanct2">
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <img
              src="/assets/images/confuse.png"
              className="mobileContanct4"
              height="auto"
              alt=""
              style={{
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
        <div className="px-4 mobileContanct2">
          <span
            className={`block`}
            style={{
              fontWeight: 700,
              lineHeight: '1.4em',
              fontSize: '26px',
              letterSpacing: '0.5px',
              color: '#5e5d5c',
            }}
          >
            {title}
            <br></br>
            {subtitle}
          </span>{' '}
          <div className=" mt-10 mobileContanct3">
            <p
              className={`text-gray-600 text-2xl`}
              style={{
                alignItems: 'center',
                lineHeight: '1.5',
              }}
            >
              <span className={`block text-black-700 text-xl`}>
                {description}
                <br></br>
                <br></br>
                {description2}
                <div className="mt-3 sm:mt-3 sm:flex sm:justify-center lg:justify-start">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-10 py-1 text-2xl font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20 shadow-xl floatingButton">
                    加入Line免費諮詢
                  </span>
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <LazyShow>
          <Summarize />
        </LazyShow>
      </div>
    </div>
  );
};

export default Contanct;
