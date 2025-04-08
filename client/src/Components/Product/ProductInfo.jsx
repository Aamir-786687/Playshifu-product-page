// src/components/ProductInfo.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Star,
  StarHalf,
  Share,
  Truck,
  Undo2,
  BadgeCheck,
  Baby,
} from "lucide-react";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2 flex items-center gap-18">
        {product.name}
        <Share className="w-5 h-5 text-black cursor-pointer" />
      </h1>

      <h3 className=" text-blue-500 pb-1">{product.subtitle}</h3>
      <p>
        <span className="flex mb-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </span>
      </p>
      <div className="flex">
        <button className="border border-purple-500 text-purple-500 p-1 px-2 text-[10px] m-2 mr-2 hover:bg-purple-50">
          High Educational Value
        </button>
        <button className="bg-red-500 text-white p-1 px-2 text-[10px] m-2 hover:bg-red-600">
          Flat 25% off
        </button>
        <button className="border border-red-500 text-red-500 text-[10px] p-1 px-2 m-2 ">
          Super Saver Deals
        </button>
      </div>
      <p className="text-xl text-green-600 font-semibold mb-4">
        ₹{product.price} <del className="text-gray-300">₹4999</del>
      </p>
      <div className="mr-70 text-sm">
        <h2 className="font-semibold text-lg mb-2">Description:</h2>
        <ul className="list-disc list-inside mb-4">
          {product.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <button className="bg-[#5f125c] text-white text-[10px] font-semibold p-2 rounded-full w-90 mb-8">
        Add to Cart{" "}
      </button>

      {/* Features box under add ot cart button*/}

      <div className="bg-purple-700 text-white rounded-xl w-110 p-5 mt-2">
        <div className="flex flex-wrap justify-around items-center gap-2 mb-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
              4-10
            </div>
            <p className="mt-2 text-sm font-medium">
              Age
              <br />
              Group
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center">
              <Truck size={28} />
            </div>
            <p className="mt-2 text-sm font-medium">
              Free
              <br />
              Shipping
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center">
              <BadgeCheck size={28} />
            </div>
            <p className="mt-2 text-sm font-medium">
              6 months
              <br />
              warranty
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center">
              <Undo2 size={28} />
            </div>
            <p className="mt-2 text-sm font-medium">
              30 Day
              <br />
              Return
            </p>
          </div>
        </div>

        <hr className="border-white opacity-50 mb-3" />

        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Device required. Not included with the toy.</li>
          <a href="#" className="hover:underline"><li>Check your device compatibility below.</li></a>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
