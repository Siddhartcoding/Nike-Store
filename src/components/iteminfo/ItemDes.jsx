import React from "react";
import { setAddItemToCart } from "../../app/CartSlice";
import { useDispatch } from "react-redux";
const ItemDes = ({ item }) => {
    console.log(item);
 const {id,color , shadow, img, title,rating, text, price} = item;
 const dispatch = useDispatch();

const onAddToCart = () => {
   const item = { id, title, text, img, color, shadow, price };

   dispatch(setAddItemToCart(item));
 };
    return (
        <div className="flex flex-col gap-5">
         <div className={`w-full h-screen `}>
         <img src={img} className="w-[50%] h-auto m-auto pt-[100px] sm:w-[65%] "/>

         <div className=" pt-[5rem]   pl-[8rem] sm:pl-[4rem]  leading-none  ">
         <h1 className="font-bold text-3xl text-slate-900 sm:text-2xl">{title}</h1>
         <div className="flex">
         <p className=" pt-11 sm:pt-[3rem] text-slate-800 lg:text-sm sm:text-xs text-base">{text}</p>
          <p className=" mt-10 sm:mt-11 ml-[1rem] text-xs rounded bg-theme-cart
          text-slate-100 px-1  p-1.5  sm:p-0.25 ">Rating:{rating}</p>
          <p className=" mt-10 sm:mt-11 ml-[2rem]  text-sm rounded bg-theme-cart
         text-slate-100 px-1  p-1 sm:p-[0.5] ">₹{price}</p>
         
       </div>
      
          </div>
          <button onClick={()=> onAddToCart()} className=" mt-9 ml-[30%] sm:ml-[25%] sm:mt-[6rem] w-auto text-lg rounded bg-theme-cart
           text-slate-100 px-10 py-2 active:scale-90">Add to cart</button>
        
        </div>
        
    </div>
)



}

export default ItemDes;