import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../hooks/orderReducer'
import { todoApi } from '../api/todos'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postAPI } from '../api/posts'


export const store = configureStore({
    reducer: {
        order: orderReducer,
        [todoApi.reducerPath]: todoApi.reducer,
        [postAPI.reducerPath]: postAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware).concat(postAPI.middleware),
})

setupListeners(store.dispatch)