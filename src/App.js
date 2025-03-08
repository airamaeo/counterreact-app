import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light');

  const themeChange = () => setTheme(
    theme === 'light' ? 'dark' : 'light'
  );

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#e8e8e8' : '#242423',
        color: theme === 'light' ? '#000' : '#fff'
      }}
    >
      <Counter />
      <ThemeToggle theme={theme} themeChange={themeChange} />
    </div>
  );
}

export default App;
