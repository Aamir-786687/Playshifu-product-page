// src/components/ProductInfo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProduct(res.data[0]); 
      })
      .catch(err => console.error(err));
  }, []);
  

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-600 font-semibold mb-4">${product.price}</p>
      <p className="mb-4">{product.description}</p>

      <h2 className="font-semibold text-lg mb-2">Features:</h2>
      <ul className="list-disc list-inside mb-4">
      {product?.features?.map((feature, index) => (
  <li key={index}>{feature}</li>
))}

      </ul>

      <h2 className="font-semibold text-lg mb-2">Specifications:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Age: {product.specifications.age}</li>
        <li>Batteries: {product.specifications.batteries}</li>
        <li>Dimensions: {product.specifications.dimensions}</li>
        <li>Weight: {product.specifications.weight}</li>
      </ul>

      <p className="font-semibold">In Stock: {product.inStock ? "Yes" : "No"}</p>
    </div>
  );
};

export default ProductInfo;
