import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group border border-gray-100">
      <div className="relative pt-[100%] overflow-hidden bg-white">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute top-0 left-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded shadow-sm">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" title={product.title}>
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1" title={product.description}>
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <div className="flex items-center space-x-1 text-yellow-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-sm font-medium text-gray-600">{product.rating?.rate} ({product.rating?.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
