import React from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "../store/game-slice";
import { motion } from "framer-motion";

const Button = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      whileHover={{ scale: 1.1 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
      className="reset bg-zinc-600 rounded-full px-[3vw] sm:px-[9vw] py-[1vw] sm:py-[2vw] font-mono text-[1.5vw] sm:text-[5vw] text-[#26ffcd] "
      onClick={handleReset}
    >
      Reset
    </motion.button>
  );
};

export default Button;
