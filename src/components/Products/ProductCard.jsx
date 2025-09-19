import React from 'react'
import Button from "../Shared/Button";
import { FaStar } from 'react-icons/fa6';

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={product.id}
            className="group w-[260px] h-[380px] bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* image area */}
            <div 
            className="relative h-[220px] flex items-center justify-center bg-gray-50 dark:bg-gray-700 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* overlay button */}
              <div className="absolute inset-0 hidden group-hover:flex bg-black/30 backdrop-blur-sm justify-center items-center z-10">
                <Button
                  text={"Add to Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>

            {/* text area */}
            <div className="p-4 leading-7 text-left flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-sm truncate dark:text-white">{product.title}</h2>
                <span className="inline-block bg-primary/80 dark:bg-black/20 text-white font-semibold text-xs px-3 py-1 rounded-md mt-1 capitalize shadow-sm ring-1 ring-black/10">
                  {product.category}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-lg dark:text-white">{product.price}</span>
                <div
                  className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-label={`Rating ${ (Number(product.rating) || 0).toFixed(1) } out of 5`}
                >
                  <FaStar size={14} className="text-yellow-400 dark:text-white/70 drop-shadow-sm" />
                  <span className="font-semibold">{(Number(product.rating) || 0).toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard