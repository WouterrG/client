import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    wishlists: [],
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setWishlists: (state, action) => {
            state.wishlists = action.payload.wishlists;
        },
        setWishlist: (state, action) => {
            const updatedWishlists = state.wishlists.map((wishlist) => {
                if (wishlist._id === action.payload.post_id) return action.payload.post;
                return wishlist;
            })
            state.wishlists = updatedWishlists;
        },
    }
})

export const { setMode, setLogin, setLogout, setWishlists, setWishlist} = authSlice.actions;
export default authSlice.reducer;
