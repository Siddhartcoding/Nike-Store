import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddItem, setOpenItem, setCloseItem, setRemoveItem } from "../app/ItemSlice";
import { selectItems } from "../app/ItemSlice";
import { selecItemState } from "../app/ItemSlice";
import ItemInfo from "./iteminfo/ItemInfo";
import ItemDes from "./iteminfo/ItemDes";


const ItemDetails = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const ifItemState = useSelector(selecItemState);

  
    const onItemToggle = () => {
        dispatch(setRemoveItem())
        console.log (items);
        dispatch(
            setCloseItem({
                itemState: false,
            })
        );
    };


    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 
            blur-effect-theme duration-500
             w-full h-screen opacity-100 z-[250] 
             ${ifItemState
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-8"
                }`}>

            <div
                className={`blur-effect-theme duration-500 h-screen
                 max-w-xl w-full absolute right-0 bg-gradient-to-b ${items.color}-90
                 ${ifItemState
                        ? "opacity-100 visible translate-x-0"
                        : "opacity-0 invisible translate-x-8"
                    }`}>

                <ItemInfo onItemToggle={onItemToggle} item ={items}/>
                <ItemDes item ={items}/>
        
            </div>







        </div>


    );
};

export default ItemDetails;
