import { motion } from 'framer-motion';
import React, { useState } from 'react';

type CardType = {
    id: number,
    front: string,
    back: string,
    text: string,
    title: string
    children: React.ReactNode
}

function Card({ id, back, front, children}:CardType) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setTimeout(()=>{
      setShow(!show)
    },500)
  };
  return (
    <motion.div
    key={id}
      className="card w-full h-full "
      animate={{ rotateY: isFlipped ? 0 : 180 }}
      transition={{ duration: 1 }}
      onClick={handleClick}>  
      <motion.div transition={{duration: 1}} className={`bg-cover rounded-md shadow-lg w-full h-full text-center flex justify-between flex-col p-5 ${show? front: back}`} >
        {children}
      </motion.div>
    </motion.div>
  );
}
export default Card
