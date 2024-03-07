import React from "react";
import "./TicTacToe.css";
import { useDispatch, useSelector } from "react-redux";
import { playSquare, resetGame } from "../store/game-slice";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { motion } from "framer-motion";

const TicTacToe = () => {
  const playGame = useSelector((store)=> store.game)
  const dispatch = useDispatch();

  const toggle = (index) => {
    dispatch(playSquare({ index }));
  };

  const handleReset = () => {
    dispatch(resetGame());
   
  };

  return (
    <div className="container flex flex-col items-center justify-center px-3  ">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
        className="title text-white  text-[6vw] tracking-tight font-semibold  pt-[2vw] mb-[2vw] "
      >
        Tic Tac Toe Game in <span className="text-[#26ffcd]">React</span>
      </motion.h1>
      <div className="board flex w-[20vw] flex-wrap mb-[2vw]">
        {playGame.squares.map((square, index) => (
          <div className="boxes w-[6vw] h-[6vw] bg-[#395451ff] mr-[0.5vw] mb-[0.5vw] rounded-[4px]" key={index} onClick={() => toggle(index)}>
            {square === "X" && <img src={cross_icon} alt="" />}
            {square === "O" && <img src={circle_icon} alt="" />}
          </div>
        ))}
        ;

      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="reset bg-zinc-600 rounded-full px-[3vw] py-[1vw] text-[1.5vw] text-[#26ffcd]"
        onClick={handleReset}
      >
        Reset
      </motion.button>
    </div>
  );
};

export default TicTacToe;
