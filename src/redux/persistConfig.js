import sessionStorage from 'redux-persist/es/storage/session';
import storage from 'redux-persist/lib/storage';

export const persistConfigApp = {
    key: "app",
    storage,
    whitelist: ['mode']
}