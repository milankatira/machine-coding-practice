import './App.css';
import StarRating from "./components/StarRating";

function App() {
  const handleRating = (rating: number) => {
    alert(`You rated: ${rating} star${rating > 1 ? "s" : ""}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🌟 Rate this product</h2>
      <StarRating totalStars={5} onRate={handleRating} />
    </div>
  );
}

export default App;
