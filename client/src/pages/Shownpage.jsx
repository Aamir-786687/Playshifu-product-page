import React, { useState } from 'react';
import TopBanner from '../Components/Navigation/Topbanner';
import Navbar from '../Components/Navigation/Navbar';
import Menu from '../Components/Navigation/Menu';
import ProductImages from '../Components/Product/ProductImages';
import ProductInfo from '../Components/Product/ProductInfo';
import WhatsAppButton from '../Components/Common/WhatsAppButton';
import Footer from '../Components/Footer';

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
      <main className="pt-[160px] ml-55 mx-auto px-4 py-12">
        <div className="flex gap-12 bg-white rounded-2xl p-8 shadow-lg">
          <ProductImages />
          <ProductInfo />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
