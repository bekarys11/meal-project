import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from '.'

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
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
            },
        }),
        getMenu: builder.query({
            queryFn: async () => {
                const { data } = await supabase
                    .from("menu")
                    .select(`
                    
                `)
            }
        })
    })
})

export const { useGetOrdersQuery } = orderApi;