import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../hooks/orderReducer'
import { todoApi } from '../api/todos'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        order: orderReducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)