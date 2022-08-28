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
        }),
        getCryptoDetails: builder.query({
            query: (coinid) => createQuery(`/coin/${coinid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createQuery(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptoQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoAPI
