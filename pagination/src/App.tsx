import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const LIMIT = 10;
  const [products, setProducts] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / LIMIT);
  useEffect(() => {
    const fetchProducts = async () => {
      const skip = (currentPage - 1) * LIMIT;
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );
        const data = await res.json();
        setProducts(data.products);
        setTotalCount(data.total);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev: number) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev: number) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Pagination </h1>

      <div>
        {products.map((product: { id: any; title: any; price: any; }) => (
          <p key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </p>
        ))}
      </div>
      <div className="page__container">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <p
          className={i === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(i)}>{i}</p>
        ))}
      </div>
      <button disabled={currentPage === 1} onClick={handlePrev}>
        Prev{" "}
      </button>
      <button disabled={currentPage === totalPages} onClick={handleNext}>
        next{" "}
      </button>
    </div>
  );
}
