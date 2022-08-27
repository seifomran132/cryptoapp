import {configureStore} from '@reduxjs/toolkit'
import { cryptoAPI } from '../services/CryptoAPI'
import { newsAPI } from '../services/NewsAPI'

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath] : cryptoAPI.reducer,
        [newsAPI.reducerPath]: newsAPI.reducer
    },
})