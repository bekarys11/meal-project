import { createSlice } from '@reduxjs/toolkit'



export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: [],
        quantity: 0,
        selectedItem: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
        },
        increase: (state, action) => {
            state.selectedItem.quantity = action.payload + 1
        }

    },
})

// Action creators are generated for each case reducer function
export const { setData, setSelectedItem, increase } = orderSlice.actions

export default orderSlice.reducer