import React from 'react';
import './App.css';
import Navigation from './Navigation';

export const NameContext = React.createContext();
export const ImgContext = React.createContext();

function App() {
  const companyName = 'Mind Tech.';
  const img = true;

  return (
    <div className='App'>
      <NameContext.Provider value={companyName}>
        <ImgContext.Provider value={img}>
          <Navigation />
        </ImgContext.Provider>
      </NameContext.Provider>
    </div >
  );
}

export default App;
