import { useEffect, useState } from 'react';

const WORDS = ['fe', 'devoción', 'unidad', 'amor', 'esperanza'];

const RotatingWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const word = WORDS[index];
  return (
    <span className="rotating-words" aria-label={word}>
      <span key={word} className="word-fade">
        {word}
      </span>
    </span>
  );
};

export default RotatingWords; 