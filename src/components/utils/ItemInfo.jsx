import React, { useEffect, useState } from "react";

const ItemInfo = () => {
    // const { addToCart } = useProductContext();
    // const [price , setPrice] = useState("");

    // useEffect(()=>{
    // {productInfo.discountPrice? setPrice(productInfo.discountPrice)
    // :setPrice(productInfo.price)}
    // },[productInfo]);
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">
               Nike Air force 
            </h2>

            <p className="text-[#767676] text-[14px]">₹4000</p>
           
            <p className="text-base text-gray-600">Discription</p>
            <p className="font-medium text-lg">
                <span className="font-normal">Colors:</span> Blue
            </p>
            <button
                // onClick={() =>

                //     addToCart({
                //         _id: productInfo._id,
                //         name: productInfo.productName,
                //         quantity: 1,
                //         image: productInfo.img,
                //         badge: productInfo.badge,
                //         price: price,
                //         colors: productInfo.color,
                //     })

                //}
                className="w-full py-4 bg-black/80 hover:bg-black duration-300 text-white text-lg font-titleFont"
            >
                Add to Cart
            </button>
            <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span> Spring
                collection, Streetwear, Women Tags: featured SKU: N/A
            </p>
        </div>
    );
};

export default ItemInfo;
