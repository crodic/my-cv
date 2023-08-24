import React from "react";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import ThemeAppProvider from "./themes/ThemeAppProvider.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeAppProvider>
                        <App />
                    </ThemeAppProvider>
                </PersistGate>
            </Provider>
        </Router>
    </React.StrictMode>
);
