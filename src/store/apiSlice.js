// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: builder => ({
        getXXX: builder.query({
            query: id => `/?id=${id}`
        }),
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
    useGetXXXQuery
} = api