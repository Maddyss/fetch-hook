import React from 'react';
import logo from './logo.svg';
import './App.css';

import useFetchJson from './useFetch';

function App() {
  const [{ isLoading, error, data }] = useFetchJson(
    'https://swapi.co/api/people',
    {
      method: 'GET'
    }
  );

  if (isLoading) {
    return <div className='App'>En chargement ...</div>;
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {data &&
            data.results &&
            data.results.map(res => {
              return <p>{res.name}</p>;
            })}
        </p>
      </header>
    </div>
  );
}

export default App;
