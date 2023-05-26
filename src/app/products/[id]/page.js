import Loading from "@/app/loading";
import { BASE_URL } from "@/utils/constant";
import React, { Suspense } from "react";

async function fetchProductById(id) {
  const product = await fetch(
    `${BASE_URL}products/${id}`,
    {
      cache: "no-store",
    }
  );
  return product.json();
}
const availabilityOptions = ["In Stock", "Out of Stock", "Pre-order"];
const featuresList = [
  "High-quality material",
  "Easy to use",
  "Durable and long-lasting",
  "Multiple color options",
  "Compact and lightweight",
];


export async function generateMetadata({ params }) {
  const product = await fetchProductById(params.id);
  return {
    title: product.title,
    description: product.description,
    thumbnail: product.images[0],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      images: product.images[0],
      title: product.title,
      description: product.description,
    },
  };
}

const ProductDetail = async ({ params }) => {
  const product = await fetchProductById(params.id);
  console.log(product);
  return (
    <main className="bg-gradient-to-tr from-purple-200 to-blue-200 flex text-[black] w-full max-md:px-10 md:px-16 lg:py-30 max-sm:py-20 sm:py-20 flex-col items-center justify-between">
      <Suspense fallback={<Loading />}>
        <div className="container ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex justify-center items-center mb-8">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 justify-center lg:pl-20 md:pl-8">
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-semibold mr-2">Rating:</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span className="text-lg">4.5</span>
                </div>
                <span className="text-gray-600 ml-2">(10 reviews)</span>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-2xl">Price:</span>
                <span className="ml-2 text-2xl">${product.price}</span>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-2xl">Availability:</span>
                <span className="ml-2 text-2xl">{availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)]}</span>
              </div>
              <div className="mb-6">
              <p className="font-semibold text-2xl mb-4">Features:</p>
              <ul className="list-disc ml-8 text-lg">
                {featuresList.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
              <button className="bg-[#E73B7B] hover:bg-[#BC2D62]  font-light text-white py-2 px-7 rounded-3xl text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
};

export default ProductDetail;
