import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game-slice";


const gameStore = configureStore({
    reducer : {
        game : gameSlice,
    }
})

export default gameStore;