import React, { useRef } from "react";
import vid1 from "../../assets/1.mp4";
import vid2 from "../../assets/2.mp4";
import vid3 from "../../assets/5.mp4";
import vid4 from "../../assets/15.mp4";

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

  const videos = [vid1, vid2, vid3, vid4];

  return (
    <div className="w-200 max-w-6xl ">
      <img
        src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fproduct%2Fproduct-manual%2Fproduct-manual-d.webp&w=1920&q=75"
        alt="Product Manual"
        className="w-full rounded-xl mb-8"
      />

      {/* Video Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex justify-center w-230  items-start overflow-x-auto gap-2"
        >
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              className="w-56 h-80 rounded-xl flex-shrink-0"
              controls
              src={videoSrc}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="text-center mb-12 mt-10">
        <h2 className="text-2xl">About</h2>
        <h3 className="text-2xl font-semibold mb-1">Junior Genius Pack</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-2.webp&w=828&q=50"
            alt="Hands-On Learning"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className=" font-semibold mb-2">Hands-On Learning</h4>
          <p className="text-gray-600 text-m">
            Blend physical and digital play seamlessly. With letter tiles,
            number blocks, and magnetic tiles, kids spell, count, and build to
            solve puzzles on the screen.
          </p>
        </div>
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=828&q=50"
            alt="Learn the Fundamentals"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className="font-semibold mb-2">Learn the Fundamentals</h4>
          <p className="text-gray-600">
            Counting, sequencing, letter identification, spelling, shapes, and
            more!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=828&q=50"
            alt="Story-Based Learning"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className=" font-semibold mb-2">Story-Based Learning</h4>
          <p className="text-gray-600 text-m">
            Play 14 exciting story-driven games with over 1000 levels using our
            innovative toys.
          </p>
        </div>
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-4.webp&w=828&q=50"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className="font-semibold mb-2">Age-Adaptive Games</h4>
          <p className="text-gray-600">
            The app customizes challenges to your child's grade level. For ages
            4-6, master counting, sequences, phonics, sight words. Kids over 6
            can conquer addition, subtraction, verbs, prepositions, and more.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-5.webp&w=828&q=50"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className=" font-semibold mb-2">Holistic STEM-Learning Pack</h4>
          <p className="text-gray-600 text-m">
            The junior genius pack is the ultimate educational learning toy to
            introduce your child to STEM concepts seamlessly.
          </p>
        </div>
        <div className="mb-5 ">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=828&q=50"
            className="rounded-xl mb-4 w-full"
          />
          <h4 className="font-semibold mb-2">Skill Building</h4>
          <p className="text-gray-600">
            Our educational learning toys nurture eloquent expression,
            mathematical reasoning, and spatial intelligence.
          </p>
        </div>
      </div>

      {/* In The Box Section */}
      <div className="mt-8 mb-12">
        <h2 className="text-2xl font-semibold mb-1 text-center">In The Box</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {/* Item 1 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=1080&q=75"
              alt="Count Spike"
              className=" object-contain mx-auto mb-2"
            />
            <p>Count Spike</p>
          </div>

          {/* Item 2 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=1080&q=75"
              alt="2 Sets Of 0-9 Numerals"
              className=" object-contain mx-auto mb-2"
            />
            <p>2 Sets Of 0-9 Numerals</p>
          </div>

          {/* Item 3 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=1080&q=75"
              alt="Gamepad"
              className="object-contain mx-auto mb-2"
            />
            <p>Gamepad</p>
          </div>

          {/* Item 4 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=1080&q=75"
              alt="Quick Start Guide"
              className="object-contain mx-auto mb-2"
            />
            <p>Quick Start Guide</p>
          </div>

          {/* Item 5 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2F48-letter-tiles.webp&w=1080&q=75"
              alt="48 Letter Tiles"
              className=" object-contain mx-auto mb-2"
            />
            <p>48 Letter Tiles</p>
          </div>

          {/* Item 6 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2Fletters-trunk.webp&w=1080&q=75"
              alt="Letters Trunk"
              className=" object-contain mx-auto mb-2"
            />
            <p>Letters Trunk</p>
          </div>

          {/* Item 7 */}
          <div className="text-center">
            <img
              src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fout-of-the-box%2F15-smart-magnetic-tiles.webp&w=1080&q=75"
              alt="15 Smart Magnetic Tiles"
              className=" object-contain m-auto mb-2"
            />
            <p>15 Smart Magnetic Tiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
