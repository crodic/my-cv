import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { persistConfigApp } from "../redux/persistConfig";
import appSlice from "./slice/appSlice";


// Create Root Reducer
const _rootReducer = combineReducers({
    app: persistReducer(persistConfigApp, appSlice),
});

// Create Store
export const store = configureStore({
    reducer: _rootReducer, // Apply Root Reducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});


export const persistor = persistStore(store);

export default store;