import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../hooks/orderReducer'

export const store = configureStore({
    reducer: {
        order: orderReducer,

    },
})