import React from 'react'
import { useSelector } from 'react-redux';
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import { motion } from 'framer-motion';

const Winner = () => {
    const winner = useSelector((store) => store.game.winner);

  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}   className="flex justify-center items-end gap-3 text-white text-4xl sm:text-2xl font-sans mb-6">
            Winner : {winner === "X" ? <img className='p-1 w-8 h-8' src={cross_icon} alt="X" /> : <img className='p-1 w-8 h-8' src={circle_icon} alt="O" />}
          </motion.div>
  )
}

export default Winner