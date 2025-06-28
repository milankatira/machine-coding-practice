import { useState, useEffect } from 'react';
import './MemoryGame.css';

const cardEmojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍑', '🍍'];

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (): Card[] => {
  const duplicatedEmojis = [...cardEmojis, ...cardEmojis];
  const shuffledEmojis = duplicatedEmojis.sort(() => Math.random() - 0.5);
  return shuffledEmojis.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
};

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = flippedCards;
      const firstCard = cards[firstCardIndex];
      const secondCard = cards[secondCardIndex];

      if (firstCard.emoji === secondCard.emoji) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.emoji === firstCard.emoji ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstCardIndex || index === secondCardIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped) {
      return;
    }

    setCards(prevCards =>
      prevCards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );

    setFlippedCards(prev => [...prev, index]);
    setMoves(prev => prev + 1);
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <div className="memory-game-container">
      <h1>Memory Game</h1>
      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="game-info">
        <p>Moves: {Math.floor(moves / 2)}</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default MemoryGame;