import React, { Suspense } from "react";
import ProductCard from "@/components/card/ProductCard";
import { BASE_URL } from "@/utils/constant";
import Loading from "../loading";

async function fetchProduct() {
  const products = await fetch(`${BASE_URL}products?limit=20&offset=1`, {
    caches: "no-store",
  });
  return await products.json();
}

const ProductPage = async ({ isProductPage }) => {
  const products = await fetchProduct();
  return (
    <div>
    
        <div
          className={`${
            isProductPage ?? "pt-[90px]"
          } pb-[130px]  bg-gradient-to-tr from-blue-200 to-purple-200 pt-[20px] max-sm:pt-[30px] text-center`}
        >
          <div className="gap-7 flex text-left flex-wrap justify-center">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default ProductPage;
