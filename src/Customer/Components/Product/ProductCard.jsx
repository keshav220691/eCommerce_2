import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
function ProductCard({ Product }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${Product.title}`)} className="ProductCard w-[15rem] m-3 transition-all cursor-pointer rounded-xl overflow-hidden group">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={Product.imageUrl}
          alt="image"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="fond-bold opacity-60">{Product.brand}</p>
          <p>{Product.title}</p>
        </div>
        <div className="text-sm gap-2 justify-center items-center flex transition-all">
          <span className=" font-semibold text-gray-700">
            {Product.discountedPrice}
          </span>
          <span className="line-through text-gray-400">
            Price: ${Product.price}
          </span>
          <span className="text-green-700 font-medium">
            {Product.discountPresent}% off
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
