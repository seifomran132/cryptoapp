import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "4dcabd215fmsh8d9005f2f2ee121p10a9c6jsn3bbb226787ae",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/";

const createQuery = (url)=> ({url, headers:newsApiHeaders})

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getNews: builder.query({
            query: ({newsCategory, count})=>(
                createQuery(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            )
        })
    })
})

export const {useGetNewsQuery} = newsAPI