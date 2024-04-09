// import { createContext, useEffect, useState } from "react";
// import io from "socket.io-client";

// export const SocketContext = createContext("");

// const SocketProvider = ({ children }) => {

//   const [socket, setSocket] = useState(null);
//   useEffect(() => {
//       const socket = io("http://localhost:8003");
//       setSocket(socket);
//       return () => socket.close();
//   }, []);

//   return <SocketContext.Provider value={{ socket}}>{children}</SocketContext.Provider>;
// };

// export default SocketProvider;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import React, { useEffect, useContext } from "react";


import io from "socket.io-client";
const socket = io("http://localhost:8003");

const initialState = {
    socketData: ""
};
// const initialState = {
//     socketData: JSON.stringify(socket)
// };


export const fetchSocket = createAsyncThunk(
    'socketfor/userconnection', () => {
        return socket;
    }
);

const socketSlice = createSlice({
    name: 'socketfor',
    initialState,
    // reducers: {
    //     setSocketData(state, action) {
    //         state.socketData = action.payload;
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSocket.fulfilled, (state, action) => {
                // state.loading = 'succeeded';
                state.socketData = action.payload;
            })
        // .addCase(fetchAllBattles.pending, (state) => {
        //     state.loading = 'pending';
        //     state.error = null;
        // })

        // .addCase(fetchAllBattles.rejected, (state, action) => {
        //     state.loading = 'failed';
        //     state.error = action.error.message || 'Failed to fetch battles';
        // });
    },
});
// export const { setSocketData } = socketSlice.actions;
export default socketSlice.reducer;


