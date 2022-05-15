import React from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      <header>
        <h1>
          <strong>Easy</strong> Buy
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text"/>
          <button type="submit">Szukaj</button>
        </div>
      </header>
      <div className="map">
        ...
      </div>
    </>
  );
}


