'use client';
import { motion } from 'motion/react';
import { useAppContext } from '../../context/AppContext';

const HeroArrow = () => {
  const { heroIconControl } = useAppContext();
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 35 35"
      className="inline-block [--size:2.388rem] md:[--size:3.1rem] lg:[--size:5.5625rem]"
      variants={{
        hidden: {
          width: '0rem',
          height: '0rem',
        },
        visible: {
          width: 'var(--size)',
          height: 'var(--size)',
        },
      }}
      initial="hidden"
      transition={{
        ease: [0.86, 0, 0.07, 0.995],
        duration: 1,
      }}
      animate={heroIconControl}
    >
      <g clipPath="url(#clip0_2748_1578)">
        <path fill="#E44021" d="M0 0h35v35H0z"></path>
        <path
          fill="#F8F7F3"
          d="m30.171 25.7-3.464.023V11.368L8.118 29.957l-2.49-2.49 18.589-18.59L9.884 8.9V5.413h20.287z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2748_1578">
          <path fill="#fff" d="M0 0h35v35H0z"></path>
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default HeroArrow;
