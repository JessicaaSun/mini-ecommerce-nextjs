import React from "react";
import FormComponent from "./components/form";

export const metadata ={
  title : 'Add product'
}

export default function AddProduct() {
  return (
    <>
      <div className="flex justify-around w-full items-center  bg-slate-200">
        <div className="flex items-start justify-start max-md:hidden align-baseline w-2/5">
          <img alt="store" className=" items-start justify-start flex  align-baseline" src="https://static.vecteezy.com/system/resources/previews/009/418/828/original/shop-marketing-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png" />
        </div>
        <FormComponent/>
      </div>
    </>
  );
}
