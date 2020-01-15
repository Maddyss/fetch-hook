# fetch-hook

## Installation

`npm install fetch-hook`

OR

`yarn add fetch-hook`

## Quick Start

### Basic Usage

```javascript
import useFetchJson from 'fetch-hook';

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
      {data &&
        data.results &&
        data.results.map(res => {
          return <p>{res.name}</p>;
        })}
    </div>
  );
}
```
