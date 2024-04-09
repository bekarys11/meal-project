import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../hooks/orderReducer'
import { orderApi } from '../api/order'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        order: orderReducer,
        [orderApi.reducerPath]: orderApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(orderApi.middleware),
})

setupListeners(store.dispatch)
