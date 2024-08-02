import {createSlice} from "@reduxjs/toolkit";
import TgWebApp from "../Services/Remote/Tg/TgWebApp";

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {
            name: '',
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
});

export const {setUser} = userSlice.actions
export default userSlice.reducer