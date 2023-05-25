import Image from "next/image";
import shop from "../../public/images/shopping2.png";
import { SUB_HEADING } from "@/utils/font";
import { GLOBAL_COLOR } from "@/constants/colors";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import ProductPage from "./products/page";
import CategoryPage from "./categories/page";
import UserPage from "./users/page";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Home - Jules",
};

export default async function Home() {
  return (
    <main className="bg-gradient-to-tr from-blue-200 to-purple-200 flex text-[black] w-full  max-md:px-10 md:px-16 max-md:pt-24 max-lg:pt-28 lg:py-7 flex-col items-center justify-between">
        <Suspense fallback={<Loading />}>
      <section>
        <div className="lg:ml-[40px] flex max-lg:pb-24 h w-full justify-between">
          <div className="flex max-md:text-center lg:w-1/2 w-full align-baseline justify-center flex-col">
            <h1 className="lg:text-[45px] md:leading-tight max-sm:leading-9 md:text-[45px] max-sm:text-[28px]">
              Welcome to <span className={`text-[#E73B7B]`}>Jules</span>
              <br />
              Your Ultimate Online Shopping Destination
            </h1>
            <h5
              className={`font-light  ${SUB_HEADING.className} pt-7 max-md:text-[16px] max-md:leading-5`}
            >
              Shop the best at Jules. Explore fashion, electronics, home decor,
              and more. Unbeatable deals and exclusive offers await. Elevate
              your online shopping with Jules today.
            </h5>
          </div>
          <div className="md:w-1/2 align-middle justify-center lg:flex max-lg:hidden">
            <Image src={shop} alt="shop" width={1300} height={1000} />
          </div>
        </div>
      </section>
    
        <section>
          <ProductPage />
        </section>
        <section>
          <CategoryPage />
        </section>

        <section
          className={`${SUB_HEADING.className}  pb-[100px] lg:px-[70px] sm:px-[50px] md:px-[30px] pt-[130px] max-sm:pt-[70px] text-center`}
        >
          <UserPage />
        </section>
      </Suspense>
    </main>
  );
}
