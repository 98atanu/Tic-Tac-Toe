import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSquare} from "../store/game-slice";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { motion } from "framer-motion";
import Winner from "./Winner";
import Button from "./Button";

const TicTacToe = () => {
  const squares = useSelector((store) => store.game.squares);
  const winner = useSelector((store) => store.game.winner);
  const dispatch = useDispatch();

  const toggle = (index) => {
    dispatch(playSquare({ index }));
  };

  return (
    <div className="container flex flex-col items-center justify-center px-3  ">
      <motion.h1
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
        className="title text-white  text-[6vw] sm:text-[8vw] font-Gilroy tracking-tight sm:tracking-tighter font-semibold  pt-[2vw] sm:p-[5vw]  mb-[2vw]"
      >
        Play <span className="text-[#26ffcd]">Tic Tac Toe</span> Game
      </motion.h1>
      {winner && <Winner />}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ease: [0.61, 1, 0.88, 1],
          duration: 1, delay: 0.5,          
        }}
        className="board  flex flex-wrap justify-center w-[20vw] sm:w-[80vw] h-[16vw] sm:h-[64vw] mb-[2vw] sm:mb-[4vw]"
      >
        {squares.map((square, index) => (
          <div
            className="boxes  w-[5vw] sm:w-[20vw] h-[5vw] sm:h-[20vw] mr-[0.4vw] sm:mr-[1.2vw] bg-[#395451ff] rounded-[5px] "
            key={index}
            onClick={() => toggle(index)}
          >
            {square === "X" && (
              <img className="icon p-3"src={cross_icon} alt="" />
            )}
            {square === "O" && (
              <img className="icon p-3"src={circle_icon} alt="" />
            )}
          </div>
        ))}
      </motion.div>   
      <Button/>
    </div>
  );
};

export default TicTacToe;
