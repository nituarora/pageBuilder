import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3306/api/' }),
    tagTypes: ['Get', 'Widget'],
    endpoints: builder => ({})
})