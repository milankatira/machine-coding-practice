import { useEffect, useRef, useState } from "react";

const LIMIT = 10;

interface Product {
  id: number;
  title: string;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const App = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async () => {
    if (isFetching || !hasMore) return;

    setIsFetching(true);
    setError(null);

    try {
      const skip = page * LIMIT;
      const resp = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
      const json: ProductResponse = await resp.json();

      setData(prev => [...prev, ...json.products]);
      setHasMore(skip + LIMIT < json.total);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting && hasMore && !isFetching) {
        setPage(prev => prev + 1);
      }
    });

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, isFetching]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🌀 Infinite Scroll – Products</h2>

      {data.map(item => (
        <div key={item.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <strong>{item.title}</strong>
        </div>
      ))}

      {error && <div style={{ color: "red" }}>{error}</div>}
      {isFetching && <div>Loading more...</div>}
      {!hasMore && <div>🚫 No more products to load.</div>}

      <div ref={observerRef} style={{ height: "1px" }} />
    </div>
  );
};

export default App;
