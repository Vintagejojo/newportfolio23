'use client';
import React, { useState, useEffect, useRef } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const AnimatedText = ({ text, className }) => {
  const [currentText, setCurrentText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentText(
        text
          .split('')
          .map((letter, index) =>
            index < iteration
              ? letter
              : letters[Math.floor(Math.random() * 26)],
          )
          .join(''),
      );
      if (iteration >= text.length) clearInterval(intervalRef.current);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span className={className} onMouseOver={handleMouseOver}>
      {currentText}
    </span>
  );
};

export default AnimatedText;
