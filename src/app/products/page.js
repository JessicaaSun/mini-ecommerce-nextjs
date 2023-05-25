import React from "react";
import ProductCard from "@/components/card/ProductCard";
import { BASE_URL } from "@/utils/constant";

async function fetchProduct() {
  const products = await fetch(
    `${BASE_URL}products?limit=20&offset=1`,
    {
      caches: "no-store",
    }
  );
  return await products.json();
}

const ProductPage = async () => {
  const products = await fetchProduct();
  return (
    <div className="pt-[20px] max-sm:pt-[0px] text-center">
      <h1 className="pb-[60px] max-sm:pb-[30px] lg:text-[40px] max-sm:text-[26px]">
        Popular Products
      </h1>
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
        ) )}
      </div>
    </div>
  );
};

export default ProductPage;
