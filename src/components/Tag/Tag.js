import { useEffect, useRef } from 'react';
function Tag() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const intervalId = setInterval(() => {
      const word = document.createElement('span');
      word.textContent = getRandomWord();
      word.classList.add('word-cloud-word');
      word.style.fontSize = `${Math.floor(Math.random() * 20) + 10}px`;
      word.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      container.appendChild(word);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Função para obter uma palavra aleatória da lista
  const getRandomWord = () => {
    const words = [
      'learn',
      'study',
      'practice',
      'speak',
      'read',
      'write',
      'listen',
      'understand',
      'grammar',
    ];
    return words[Math.floor(Math.random() * words.length)];
  };

  return (
    <div className='word-cloud-container' ref={containerRef}>
      {/* Words will be dynamically added here */}
    </div>
  );
}

export default Tag;
