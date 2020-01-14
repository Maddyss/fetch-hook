import React from 'react';
import logo from './logo.svg';
import './App.css';

import useCustomFetch from './useFetch';

function App() {
  const [state] = useCustomFetch('https://swapi.co/api/people', {});

  if (state.isLoading) {
    return <div className='App'>En chargement ...</div>;
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {state.data &&
            state.data.results &&
            state.data.results.map(res => {
              return <p>{res.name}</p>;
            })}
        </p>
      </header>
    </div>
  );
}

export default App;
