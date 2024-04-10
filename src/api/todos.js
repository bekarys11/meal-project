import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from './api';

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `/todos`,
        }),
        getTodosById: builder.query({
            query: (id) => `/todos/${id}`
        }),
        getOrders: builder.query({
            queryFn: async () => {

                const { data } = await supabase.
                    from("restaurants")
                    .select(`
    food (id, name, description, price, created_at)
    `)
                    .eq("id", 2)

                data[0].food.forEach((item) => {
                    item.quantity = 0;
                    item.sum = 0;
                })

                return { data: data[0].food }

            }
        })

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useGetTodosByIdQuery, useGetOrdersQuery } = todoApi