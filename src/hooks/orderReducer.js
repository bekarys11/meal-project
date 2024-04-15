import { createSlice } from '@reduxjs/toolkit'



export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: [],
        quantity: 0,
        selectedItem: null,
        orderedItems: []
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
        },
        closeModal: (state) => {
            state.selectedItem = null;
        },
        addToOrderedItems: (state, action) => {
            state.orderedItems.push(action.payload)
            state.selectedItem = null;
        },
        changeQuantity: (state, action) => {
            state.orderedItems.map(item => {
                if (item.id === action.payload.id) {
                    item.quantity = +action.payload.quantity
                }
            })
        },

    },
})

// Action creators are generated for each case reducer function
export const { setData, setSelectedItem, increase, closeModal, addToOrderedItems, changeQuantity } = orderSlice.actions

export default orderSlice.reducer