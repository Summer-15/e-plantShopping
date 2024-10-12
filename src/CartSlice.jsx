import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
        state.totalQuantity += 1; // Increment total quantity
      },
    removeItem: (state, action) => {
        const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
        if (itemIndex !== -1) {
            state.totalQuantity -= state.items[itemIndex].quantity; 
            state.items.splice(itemIndex, 1);
        }
    },
    updateQuantity: (state, action) => {
        const item = state.items.find(item => item.name === action.payload.name);
        if (item) {
          state.totalQuantity += action.payload.quantity - item.quantity;
          item.quantity = action.payload.quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
