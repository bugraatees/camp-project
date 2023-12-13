import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

const createStore  = configureStore({
    reducer:rootReducer,
    devToolsEnhancer
})

export default createStore;
