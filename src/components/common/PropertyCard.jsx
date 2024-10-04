/* eslint-disable react/prop-types */
// import React from 'react';
import BathroomSvg from "./svg/BathroomSvg";
import BedroomSvg from "./svg/BedroomSvg";

export default function PropertyCard({title, price, bed, bath}) {
  return (
    <div className="p-4 cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200 bg-white rounded-lg border border-gray-600/10">
      <img
        src="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
        alt="property"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
              <h4 className="text-2xl font-bold cursor-pointer">{ title ? title : 'Modern Design Villa'}</h4>
        <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">{ price ? price : '3000.00' }</span> /Tk
        </div>
      </div>

      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedroomSvg />
                  <p><span className="font-bold text-gray-900">{ bed ? bed : 3 }</span> Bedrooms</p>
        </div>
        <div className="flex items-center">
          <BathroomSvg />
                  <p><span className="font-bold text-gray-900">{ bath ? bath : 4 }</span> Bathrooms</p>
        </div>
      </div>
    </div>
  );
}
