import React from "react";
import CategoryCard from "@/components/card/CategoryCard";
import { BASE_URL } from "@/utils/constant";

async function fetchCategories() {
  const categories = await fetch(
    `${BASE_URL}categories?limit=0`,
    {
      cache: "no-store",
    }
  );
  return await categories.json();
}

const CategoryPage = async () => {
  const categories = await fetchCategories();
  return (
    <div>
      <div className="text- max-sm:pt-[60px] text-center">
        <h1 className="pb-[60px] max-sm:pb-[30px] text-[40px] max-sm:text-[26px]">
          Categories
        </h1>
        <div className="gap-9 max-md:gap-5 flex text-left flex-wrap justify-center">
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryCard
                id={category.id}
                title={category.name}
                image={category.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
