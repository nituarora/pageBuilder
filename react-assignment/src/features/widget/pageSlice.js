import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const widgetAdapter = createEntityAdapter()

const initialState = widgetAdapter.getInitialState()

export const widgetSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWidget: builder.query({
            query: () => 'widget/get-widget',
            transformResponse: (responseData) => {
              
                console.log("responseData==",responseData)
                return responseData
            },
           
        }),
        createWidget :builder.mutation({
            query:initialWidget =>({
                url:'widget/create-widget',
                method:'POST',
                body:{
                    ...initialWidget,
                }
            }),
           
        }),
        getSingleWidget :builder.mutation({
            query:initialWidget =>({
                url:`widget/get-single-widget/${initialWidget.id}`,
                method:'POST',
                body:{
                    ...initialWidget,
                }
            }), 
           
        }),
        updateWidget : builder.mutation({
            query : initialWidget =>({
                url : `widget/update-widget`,
                method:'POST',
                body:{
                    ...initialWidget
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
    useGetWidgetQuery,
    useCreateWidgetMutation,
    useGetSingleWidgetMutation,
    useUpdateWidgetMutation

} = widgetSlice