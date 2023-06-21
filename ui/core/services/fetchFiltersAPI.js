import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fetchFiltersAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    fetchFilters: builder.query({
      query: (options) => `/filter?page=${options.page}&page_size=${options.pageSize}&search=${encodeURIComponent(options.search)}&order=${encodeURIComponent(options.sortOrder)}`
    })
  })
})

export const { useFetchFiltersQuery } = fetchFiltersAPI
