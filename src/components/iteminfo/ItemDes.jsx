import React from "react";

const ItemDes = ({ item }) => {
    console.log(item);
 const {color , shadow, img} = item;
    return (
    <div className={`w-full h-[40%]    opacity-90`}>
            <img src={img} className="w-[50%] h-[55%] m-auto pt-7 "/>
    </div>
)



}

export default ItemDes;