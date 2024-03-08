import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSquare, resetGame } from "../store/game-slice";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { motion } from "framer-motion";
import Winner from "./Winner";

const TicTacToe = () => {
  const squares = useSelector((store) => store.game.squares);
  const winner = useSelector((store) => store.game.winner);
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
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
        className="title text-white  text-[6vw] tracking-tight font-semibold  pt-[2vw] mb-[2vw] "
      >
        Tic Tac Toe Game in <span className="text-[#26ffcd]">React</span>
      </motion.h1>
      {winner && <Winner />}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        
        transition={{ease: [0.61, 1, 0.88, 1],
          duration: 1, delay: 0.5,          
        }}
        className="board  flex flex-wrap justify-center w-[20vw]   h-[16vw] sm:h-[80vw] mb-[1.5vw] sm:w-[80vw] "
      >
        {squares.map((square, index) => (
          <div
          
            className="boxes  w-[5vw]  h-[5vw]  mr-[0.4vw]  bg-[#395451ff] rounded-[4px] "
            key={index}
            onClick={() => toggle(index)}
          >
            {square === "X" && (
              <img className="icon p-1.5" src={cross_icon} alt="" />
            )}
            {square === "O" && (
              <img className="icon p-1.5" src={circle_icon} alt="" />
            )}
          </div>
        ))}
      </motion.div>
      <motion.button
       initial={{y:100, opacity: 0}}
       animate={{y: 0, opacity: 100}}
        whileHover={{ scale: 1.1 }}
        transition={{ease:[0.22, 1, 0.36, 1],duration:1 }}
        className="reset bg-zinc-600 rounded-full px-[3vw] py-[1vw] text-[1.5vw] text-[#26ffcd] "
        onClick={handleReset}
      >
        Reset
      </motion.button>
    </div>
  );
};

export default TicTacToe;
