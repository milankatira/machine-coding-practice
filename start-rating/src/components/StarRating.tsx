import { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
  onRate?: (rating: number) => void;
}

const StarRating = ({ totalStars = 5, onRate }: StarRatingProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (star: number) => {
    setSelected(star);
    onRate?.(star);
  };

  return (
    <div style={{ display: "flex", gap: "4px", cursor: "pointer" }}>
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1;
        const isFilled = hovered !== null ? starValue <= hovered : starValue <= selected;

        return (
          <svg
            key={i}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill={isFilled ? "#FFD700" : "none"}
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(starValue)}
            style={{
              transition: "fill 0.2s ease",
              transform: isFilled ? "scale(1.1)" : "scale(1)",
            }}
          >
            <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
