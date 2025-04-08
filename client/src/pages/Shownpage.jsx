import React, { useState } from 'react';
import TopBanner from '../Components/Navigation/TopBanner';
import Navbar from '../Components/Navigation/Navbar';
import Menu from '../Components/Navigation/Menu';
import ProductImages from '../Components/Product/ProductImages';
import ProductInfo from '../Components/Product/ProductInfo';
import WhatsAppButton from '../Components/Common/WhatsAppButton';
import Footer from '../Components/Footer';
import ProductDetails from '../Components/Product/ProductDetails';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <TopBanner />
        <Navbar />
        <Menu />
      </div>

      {/* Main Content with padding to offset fixed nav */}
      <main className="pt-[160px] flex justify-center items-start mx-auto px-4 py-12 max-w-7xl">

        <div className="flex gap-12 bg-white rounded-2xl p-8 ">
          <ProductImages />
          <ProductInfo />
        </div>
      </main>
      <div className='flex justify-center items-start'>
      <ProductDetails />
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
