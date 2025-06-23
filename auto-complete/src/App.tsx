import { useCallback, useEffect, useState } from 'react';
import './App.css';

type Recipe = {
  name: string;
  id: number;
};

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Recipe[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState<Record<string, Recipe[]>>({});

  const debouncedInput = useDebounce(input, 300);

  const fetchData = useCallback(async (query: string) => {
    if (cache[query]) {
      setResult(cache[query]);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      const recipes = data.recipes || [];

      setResult(recipes);
      setCache(prev => ({
        ...prev,
        [query]: recipes,
      }));
    } catch (err) {
      console.error('Fetch error:', err);
      setResult([]);
    } finally {
      setLoading(false);
    }
  }, [cache]);

  useEffect(() => {
    if (!debouncedInput.trim()) {
      setResult([]);
      return;
    }
    fetchData(debouncedInput.trim());
  }, [debouncedInput]);

  return (
    <div className="container">
      <p className="search__title">🍳 Recipe Search</p>
      <input
        type="text"
        className="search__input"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setTimeout(() => setShowResult(false), 100)}
        aria-autocomplete="list"
        aria-controls="autocomplete-results"
        aria-expanded={showResult}
      />

      {showResult && (
        <div className="search__result" id="autocomplete-results" role="listbox">
          {loading && <p className="search__loading">Loading...</p>}

          {!loading && result.length > 0 && input.trim().length > 0 && (
            result.map((item) => (
              <div key={item.id} role="option" className="search__item">
                <p className="search__name">{item.name}</p>
              </div>
            ))
          )}

          {!loading && result.length === 0 && input.trim().length > 0 && (
            <p className="search__no-result">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
