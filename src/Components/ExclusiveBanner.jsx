import img1 from "../assets/shop.avif";
import Container from "./Container";

const ExclusiveBanner = () => {
  return (
    <Container className="flex flex-col md:flex-row items-center bg-[#FFFFFF] p-6 md:p-12 transition-shadow duration-300">
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src={img1} alt="Product" className="w-72 h-auto " />
      </div>
      {/* Left Side - Title and Description */}
      <div className="md:w-1/2 space-y-4 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Radiant Glow Skincare Collection
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Unlock the secret to glowing, healthy skin with our Radiant Glow
          Collection. Formulated with natural ingredients, our products nourish
          and rejuvenate your skin, bringing out its natural beauty.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
          Buy Now
        </button>
      </div>

      {/* Right Side - Product Image */}
    </Container>
  );
};

export default ExclusiveBanner;