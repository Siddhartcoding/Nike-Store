import React from "react";

const ItemDes = ({ item }) => {
    console.log(item);
 const {color , shadow, img, title,rating, text, price} = item;

    return (
        <div className="flex w-full px-5">
    <div className={`w-full h-screen  opacity-90`}>
       <img src={img} className="w-[50%] h-auto m-auto pt-[100px] sm:w-[65%] "/>

     <div className=" pt-[7rem] pl-[6rem]  leading-none sm:pl-[3rem] ">
       <h1 className="font-bold text-3xl text-slate-900  fixed">{title}</h1>
       <div className="flex">
       <p className=" pt-11 text-sm text-slate-800 lg:text-sm sm:text-xs flex items-center justify-center">{text}</p>
       <p className=" mt-11 ml-[1rem] text-xs rounded bg-theme-cart
        text-slate-100 px-1 py-1 flex items-center justify-center ">Rating:{rating}</p>
       <p className=" mt-11 ml-[2rem]  text-sm rounded bg-theme-cart
        text-slate-100 px-1 py-0.5">₹{price}</p>
         
       </div>
      
          </div>
          <button className=" mt-9 ml-[12rem]  sm:ml-[6rem] absolut
           text-sm rounded bg-theme-cart text-slate-100 px-10 py-2 active:scale-90">Add to cart</button>
        
        </div>
        
    </div>
)



}

export default ItemDes;