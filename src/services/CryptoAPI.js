import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "4dcabd215fmsh8d9005f2f2ee121p10a9c6jsn3bbb226787ae",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createQuery = (url)=> ({url, headers: cryptoApiHeaders})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCrypto: builder.query({
            query: (count)=>(createQuery(`/coins?limit=${count}`))
        })
    })
})

export const {
    useGetCryptoQuery
} = cryptoAPI

// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "4dcabd215fmsh8d9005f2f2ee121p10a9c6jsn3bbb226787ae",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
