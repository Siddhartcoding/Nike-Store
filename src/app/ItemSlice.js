import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {

    itemState: false,
    items: {}
};

const ItemSlice = createSlice({
    initialState,
    name: "items",
    reducers: {
        setOpenItem: (state, action) => {
            state.itemState = action.payload.itemState;
          //  console.log(action.payload.itemState);
        },
        setCloseItem: (state, action) => {
            state.itemState = action.payload.itemState;
            
        },
        setAddItem: (state, action) => {
           state.items =(action.payload);
           // console.log(state.items);
            
            //console.log(action.payload);
        },

        setRemoveItem: (state, action) => {
          state.items = {};

        },
    }
});

export const {
    setAddItem,
    setCloseItem,
    setOpenItem,
    setRemoveItem
} = ItemSlice.actions;

export const selecItemState = (state) => state.item.itemState;
export const selectItems = (state) => state.item.items;
export default ItemSlice.reducer;