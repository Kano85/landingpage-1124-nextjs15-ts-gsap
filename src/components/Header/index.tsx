// src/components/Header/index.tsx

'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../common/RoundedButton';
import Magnetic from '../common/Magnetic';

export default function Header() {
  const header = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          setIsActive(false);
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
      },
    });
  }, []);

  const handleNavClick = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>{/* SVG Logo */}</div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a href="#work">Work</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="#about">About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a href="#contact-me">Contact</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
        <div className={styles.marq}></div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav onNavClick={handleNavClick} />}
      </AnimatePresence>
    </>
  );
}
