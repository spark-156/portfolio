import React, { useState, useEffect } from 'react';

function App() {
  const [apiCallResponse, setApiCallResponse] = useState(null);
  const [selectedApi, setSelectedApi] = useState('/api/helloworld');

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(selectedApi);
      const body = await res.json();
      if (res.status !== 200) {throw Error(body.message)}
      setApiCallResponse(body.string);
    }
    fetchApi();
  }, [selectedApi]);

  function handleApiSelectorChange({ target }) {
    setSelectedApi(target.value);
    console.log(selectedApi);
  }

  return (
    <div>
      <h1>Welcome to React!</h1>
      <div>{apiCallResponse}</div>
      <select onChange={handleApiSelectorChange}>
        <option value="/api/helloworld">helloworld</option>
        <option value="/api/express_backend">express</option>
      </select>
    </div>
  );
}

export default App;
