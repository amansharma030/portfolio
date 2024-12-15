import logo from './logo.svg';
import './App.css';
import PortfolioWebsite from './pages';
import { useState } from 'react';

function App() {
  const [theme,setTheme]=useState("dark")

  return (
    <div className={`App ${theme == 'dark' ? "black_theme" : "white_theme"}`}>
      <PortfolioWebsite 
      theme={theme}
      setTheme={setTheme}
      />
    </div>
  );
}

export default App;
