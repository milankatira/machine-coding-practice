
import { useTheme } from '../contexts/ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: `2px solid ${theme === 'light' ? '#000' : '#fff'}`,
    padding: '20px',
    margin: '20px 0',
  };

  return (
    <div style={style}>
      <h2>Themed Component</h2>
      <p>This component's appearance changes based on the selected theme.</p>
    </div>
  );
};

export default ThemedComponent;
