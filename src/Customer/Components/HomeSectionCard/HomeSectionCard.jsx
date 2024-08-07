import React from "react";
import { useNavigate } from "react-router-dom";

function HomeSectionCard({ product }) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/product/${product.title}`)} className="cursor-pointer flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden w-[15rem] h-[20rem] border group">
      <div className="h-[70%] w-full group-hover:h-[60%]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-around p-2">
        <h3 className="text-lg font-medium text-gray-900 ">{product.brand}</h3>
        <p className="text-sm text-gray-500 whitespace-nowrap">{product.title}</p>
        <div className="text-xs gap-2 justify-center items-center hidden group-hover:flex transition duration-100">
          <span className="text-sm font-semibold text-gray-700">
            ${product.discountedPrice}
          </span>
          <span className="line-through">Price: ${product.price}</span>
          <span className="text-green-700 font-medium">
            {product.discountPresent}% off
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionCard;
