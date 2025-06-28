import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import ThemedComponent from './components/ThemedComponent';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Dark/Light Mode Demo</h1>
        <ThemeToggleButton />
      </header>
      <main>
        <ThemedComponent />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;