import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({     // config
    name: 'cart',
    initialState: {    // initialState is an object and this has an empty cart array
        items:[],
        isPage:true
    },
    reducers: {         // reducer is an object and it has different actions that we can take.
        // mutating the state here
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        // removeItem: (state) =>{       // here we don't need action
        //     state.items.pop();
        // },
        clearCart: (state) =>{
            state.items.length = 0;
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            state.items.splice(index, 1);
        },
        changePage:(state,action)=>{
            state.isPage = !state.isPage
        }
    }
})

export const {addItem, removeItem, clearCart,changePage} = cartSlice.actions;
export default cartSlice.reducer;

//vanialla (older) redux => don't mutate the state.
// that was a big problem and thus the new react-redux came.