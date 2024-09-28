import { ItemProps } from "@/features/home/components/home/AllServicesRender";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  item: ItemProps;
  totalPrice: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<ItemProps>) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.cartItems.push({
          item: action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.totalPrice += cartItem.item.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === action.payload
      );
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartItem.totalPrice -= cartItem.item.price;
      } else {
        // Remove the item when quantity is 0
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.item.id !== action.payload
        );
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  setCartItems,
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItemFromCart,
  resetCart,
} = cart.actions;
export default cart.reducer;
