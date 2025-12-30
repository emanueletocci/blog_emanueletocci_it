import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); 
    
    let i = 0;

    const typingInterval = setInterval(() => {
      i++; 
      setDisplayText(text.substring(0, i));

      if (i >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};