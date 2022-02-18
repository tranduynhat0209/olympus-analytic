import { createSlice } from "@reduxjs/toolkit";
const initIsDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
const themeSlice = createSlice({
    name: "themeSlice",
    initialState: {
        isDarkMode: initIsDarkMode !== null ? initIsDarkMode: true
    },
    reducers:{
        toggleMode(state, action){
            const toggledValue = !state.isDarkMode;
            state.isDarkMode = toggledValue;
            localStorage.setItem("isDarkMode", toggledValue);
        }
    }
})

export default themeSlice.reducer;
export const { toggleMode } = themeSlice.actions;