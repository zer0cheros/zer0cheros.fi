import React, { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import Card from "./Card";
import Modal from "./Modal";
import { FadeIn } from "../FadeIn";

const work = [
  {
    id: 1,
    bg: "#266678",
    name: "Optidev, Learning platform for students",
    url: "https://optidev.fi",
    img: "/optidev.webp",
    text: 'Optidev is a comprehensive web application built using a full-stack technology stack that incorporates Next.js, Prisma, and MongoDB. The application encompasses various pages, including an administrator dashboard where users can manage other users, create quizzes, and add questions for students. Optidev serves as a community hub for students to track their learning progress and access courses. Security measures are implemented through NextAuth.js and custom provider configurations to safeguard routes and data.'
  },
  {
    id: 2,
    bg: "#36a18b",
    name: "Wordpress-cms, Wordpress cms for NextJs",
    url: "https://github.com/zer0cheros/ddev-bedrock-nexjs",
    img: "/docker.jpg",
    text: 'This application is developed using Next.js and leverages the powerful WordPress engine as its backend. The WordPress setup is based on Bedrock, a framework that enhances development efficiency and simplifies updates. With Bedrock, the inclusion of Composer streamlines code maintenance and facilitates the addition of new features.The application seamlessly retrieves data such as language preferences, pages, and products, rendering them swiftly and efficiently through the Next.js framework. This combination of technologies ensures a smooth and responsive user experience while also simplifying the development process and enhancing the applications functionality.'
  },
  {
    id: 3,
    bg: "#cda35f",
    name: "FireWebb App, E-commerce created in nodeJs and Firebase",
    url: "https://github.com/zer0cheros/FireWebb-app",
    img: "/Firewebbapp.webp",
    text: 'FireWebb-App is a comprehensive web application developed using a technology stack that includes Firebase, Node.js, Express, and EJS. It features various pages, including an admin panel with user and sales management capabilities. Users also have personalized profiles, enabling data storage and profile customization. Certain routes are protected with authentication tokens. Please feel free to share and utilize this application for your needs.'
  },
  {
    id: 4,
    bg: "#cda35f",
    name: "simple-react-server",
    url: "https://www.npmjs.com/package/@zer0cheros/simple-react-server",
    img: "/npm.webp",
    text: 'A method for testing your React application against a simple and minimal backend API server. The server is a mix of express package and knex package. Simplifying coding for a more enjoyable experience.'
  },
];

const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.04;

interface CardPosition {
  index: number;
}

const CardStack = () => {
  const [cards, setCards] = useState(work);
  const [initialPositions, setInitialPositions] = useState<CardPosition[]>([]);
  const [visibe, setVisibe] = useState(false)
  useEffect(() => {
    console.log('update')
    setInitialPositions(
      Array.from({ length: cards.length }, (_, index) => ({ index }))
    );
  }, [cards]);

  const moveToEnd = () => {
    if (cards.length <= 1) {
      return;
    }
    const firstCard = cards[0];
    const remainingCards = cards.slice(1);
    const newCards = [...remainingCards, firstCard];
    setCards(newCards);
  };

  const resetCardPosition = (index: number) => {
    if (initialPositions[index].index !== index) {
      const newInitialPositions = [...initialPositions];
      newInitialPositions[index].index = index;
      setInitialPositions(newInitialPositions);
    }
  };

  return (
    <div className="relative w-full h-full flex items-start -mt-6 justify-end max-md:justify-center">
      <ul className="relative h-[80%] w-[80%]">
      <FadeIn>
        {cards.map((color, index) => {
          const canDrag = index === 0;
          return (
            <motion.li
              key={color.id}
              className="absolute flex justify-center items-end pb-8 h-[80%] w-[70%] shadow-xl"
              style={{
                transformOrigin: "top center",
                transition: "0.3s",
                backgroundImage: `url(${color.img})`,
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "10px 10px 20px 1px rgba(0, 0, 0, 0.3)",
                cursor: canDrag ? "grab" : "auto",
                zIndex: work.length - index, 
                left: initialPositions[index]?.index * CARD_OFFSET | 0,
                bottom: initialPositions[index]?.index * CARD_OFFSET | 0,
                scale: 1 - initialPositions[index]?.index * SCALE_FACTOR,
              }}
              initial={{ scale: 1 - initialPositions[index]?.index * SCALE_FACTOR,}}
              animate={{ x: initialPositions[index]?.index * CARD_OFFSET}} // Use 'x' instead of 'y'
              drag={canDrag ? "x" : false} 
              dragConstraints={{
                left: 10, // Use 'left' instead of 'top'
                right: -10, // Add right constraint
              }}
              dragElastic={1.5}
              onDragEnd={() => {
                moveToEnd();
                resetCardPosition(index);
              }}
              onDoubleClick={() => {
                setVisibe(!visibe)
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                duration: 1.5,
              }}
            >
              <div className="bg-slate-50 p-5 shadow-2xl rounded-lg drop-shadow-lg">
                <h1 className="text-3xl max-md:text-xl text-green-600">{color.name}</h1>
              </div>
              
              {visibe &&  <Modal setVisible={visibe} id={color.id} text={color.text} url={color.url} name={color.name}/> }
            </motion.li>
           
          );
        })}
        </FadeIn>
      </ul>
    </div>
  );
};

export default CardStack;
