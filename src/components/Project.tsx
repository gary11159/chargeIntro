import React from 'react';

import config from '../config/index.json';

const Project = () => {
  const { project } = config;

  return (
    <div className={`py-12 bg-background`} id="features">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobileProjectHeight"
        style={{
          borderRadius: '15px',
          backgroundColor: '#FFF9F3',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {/* 左邊 */}
        <div className="px-4 mobileProject" style={{ flexWrap: 'wrap' }}>
          <span
            className={`block`}
            style={{
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: '1.4em',
              letterSpacing: '0.5px',
              color: '#5e5d5c',
            }}
          >
            {project.title}
            <br></br>
            {project.subtitle}
          </span>{' '}
          {/* 敘述 */}
          <div
            className="display flex mt-10"
            style={{ justifyContent: 'center' }}
          >
            <p
              className={`text-gray-600 text-2xl`}
              style={{
                alignItems: 'center',
                lineHeight: '1.5',
              }}
            >
              <span className={`block text-black-700 text-xl`}>
                {project.description}
                <br></br>
                <br></br>
                {project.description2}
                <br></br>
                <br></br>
                {project.description3}
                <br></br>
                <br></br>
                {project.description4}
                <span style={{ fontWeight: 'bold' }}>
                  {project.description4_1}
                </span>
                {project.description4_2}
                <div className="mt-3 mb-10 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-10 py-1 text-2xl font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20 shadow-xl floatingButton">
                    加入Line免費諮詢
                  </span>
                </div>
              </span>
            </p>
          </div>
        </div>

        {/* 右邊 */}
        <div className="px-4 mobileProject">
          <div>
            <img
              src="/assets/images/charger2.png"
              width="100%"
              height="auto"
              alt=""
              style={{
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
