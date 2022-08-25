import {configureStore} from '@reduxjs/toolkit'
import { cryptoAPI } from '../services/CryptoAPI'


export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath] : cryptoAPI.reducer
    },
})