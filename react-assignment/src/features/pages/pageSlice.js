import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const pageAdapter = createEntityAdapter()

const initialState = pageAdapter.getInitialState()

export const pageSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPage: builder.query({
            query: () => 'page/get-page',
            transformResponse: (responseData) => {
              
                console.log("responseData==",responseData)
                return responseData
            },
           
        }),
        createPage :builder.mutation({
            query:initialPage =>({
                url:'page/create-page',
                method:'POST',
                body:{
                    ...initialPage,
                }
            }),
           
        }),
        getSinglePage :builder.mutation({
            query:initialPage =>({
                url:`page/get-single-page/`,
                method:'POST',
                body:{
                    ...initialPage,
                }
            }), 
           
        }),
        updatePage : builder.mutation({
            query : initialPage =>({
                url : `page/update-page`,
                method:'POST',
                body:{
                    ...initialPage
                }
            }),
             transformResponse: (response) => {
                // Customize the response data here if needed
                console.log("response====",response)
                return response.data; // Assuming the response has a 'data' property
            }
        })

        
    })
})

export const {
    useGetPageQuery,
    useCreatePageMutation,
    useGetSinglePageMutation,
    useUpdatePageMutation

} = pageSlice