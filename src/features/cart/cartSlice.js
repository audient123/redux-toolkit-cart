import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// если изменить url, то сработает thunkAPI.rejectWithValue("something went wrong");
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
};

// fetch()
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//     return fetch(url)
//         .then(resp => resp.json())
//         .catch((err)=>console.log(err));
// });

// axios()
export const getCartItems = createAsyncThunk("cart/getCartItems",
    async (name, thunkAPI) => {
        try {
            const resp = await axios(url);
            return resp.data; // так работает axios
        } catch (error) {
            return thunkAPI.rejectWithValue("something went wrong");
        }
    });

// State будет мутироваться засчет immer library
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        // three lifecycle actions
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoadinf = false;
        }
    }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;