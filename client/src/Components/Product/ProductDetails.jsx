import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetails = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -300 : 300,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <div className="px-4 py-8">
        {/* Product Guide Banner */}
        <div className="bg-[#5C1ED4] text-white rounded-2xl px-6 py-8 relative overflow-hidden mb-8">
          <div className="flex items-center justify-between relative z-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Product Guide</h2>
              <p className="mb-4">
                For more information about this toy and how to set up and start playing.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 font-semibold rounded-full">
                View Product Guide
              </button>
            </div>
            <img src="/dino.png" alt="Dino" className="w-28 h-28" />
          </div>
        </div>
  
        {/* Video Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
  
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 py-4 scrollbar-hide scroll-smooth"
          >
            {[1, 2, 3, 4].map((i) => (
              <video
                key={i}
                className="w-56 h-80 rounded-xl flex-shrink-0"
                controls
                src={`/video-${i}.mp4`} // Replace with real paths
              />
            ))}
          </div>
  
          <button
            onClick={() => scroll("right")}
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

export default ProductDetails