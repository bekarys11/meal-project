import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from './api'

export const postAPI = createApi({
    reducerPath: "post",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        createOrder: builder.mutation({
            query: (body) => ({
                url: '/posts',
                method: 'POST',
                body,
            })
        }),
        newCreateOrder: builder.mutation({
            queryFn: async ({ first_name, last_name, email, phone, street_name, house_number, zip_code, city, meal_ids }) => {
                const { data, error } = await supabase
                    .from('order')
                    .insert([
                        {
                            first_name: first_name,
                            last_name: last_name,
                            email: email,
                            phone: phone,
                            street_name: street_name,
                            house_number: house_number,
                            zip_code: zip_code,
                            city: city,
                            meal_ids: meal_ids,
                        },
                    ])
                    .select()

                if (error) {
                    throw new Error(error)
                }
                return { result: data }
            },
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery, useCreateOrderMutation, useNewCreateOrderMutation } = postAPI;