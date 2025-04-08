import React, { useState } from 'react';
import TopBanner from '../Components/Navigation/Topbanner';
import Navbar from '../Components/Navigation/Navbar';
import Menu from '../Components/Navigation/Menu';
import ProductImages from '../Components/Product/ProductImages';
import ProductInfo from '../Components/Product/ProductInfo';
import WhatsAppButton from '../Components/Common/WhatsAppButton';
import Footer from '../Components/Footer';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    '/junior-genius-pack.jpg',
    '/thumbnail-1.jpg',
    '/thumbnail-2.jpg',
    '/thumbnail-3.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navbar />
      <Menu />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-12 bg-white rounded-2xl p-8 shadow-lg">
          <ProductImages 
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <ProductInfo />
        </div>
      </main>
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;