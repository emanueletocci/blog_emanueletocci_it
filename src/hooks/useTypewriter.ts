import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // 1. Resettiamo subito il testo (per evitare che rimanga il testo vecchio per un istante)
    setDisplayText(''); 
    
    let i = 0;

    const typingInterval = setInterval(() => {
      // 2. Incrementiamo l'indice
      i++; 
      
      // 3. Invece di aggiungere, ricalcoliamo la fetta di stringa esatta
      // "Mostrami dal carattere 0 al carattere i"
      // Questo impedisce che le lettere vengano saltate.
      setDisplayText(text.substring(0, i));

      // 4. Se abbiamo finito, fermiamo il timer
      if (i >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};