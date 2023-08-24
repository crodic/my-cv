import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name: "app",
    initialState: { mode: "light" },
    reducers: {
        changeMode: (state, action) => {
            let mode = action.payload;
            if (mode === "system-dark") {
                mode = "dark";
            } else if (mode === "system-light") {
                mode = "light"
            }
            state.mode = mode;
        }
    }
})

export default AppSlice.reducer;
export const { changeMode } = AppSlice.actions;