import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`text-4xl tracking-tight font-extrabold sm:text-4xl md:text-5xl text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}
              {'  '}
              {index === 2 ? <br></br> : <a></a>}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div
            className={`display flex  w-full sm:w-2/5 p-6 mobileProduct`}
            style={{ justifyContent: 'right', alignItems: 'center' }}
          >
            <img
              className="h-6/6"
              width={'70%'}
              style={{ height: '90%' }}
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
          <div
            className={`sm:w-3/5 pr-50 mobileProduct`}
            style={{ justifyContent: 'left', alignItems: 'center' }}
          >
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p
              className={`text-gray-600 display flex text-lg`}
              style={{
                alignItems: 'center',
                lineHeight: '2.5',
                maxWidth: '80%',
              }}
            >
              {firstItem?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
