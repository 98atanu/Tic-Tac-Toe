import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        playSquare(state, action) {
            const { index } = action.payload;
            if (state.squares[index] || state.winner) {
                return;
            }

            state.squares[index] = state.xIsNext ? 'X' : 'O';
            state.xIsNext = !state.xIsNext;
            state.winner = calculateWinner(state.squares)
        },

        resetGame(state){
            state.squares = Array(9).fill(null);
            state.xIsNext = true;
            state.winner = null;
        }


    }
})

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const { playSquare, resetGame } = gameSlice.actions;

export default gameSlice.reducer;