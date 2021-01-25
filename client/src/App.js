import React, { useState, useEffect } from 'react';

function App() {
  const [apiCallResponse, setApiCallResponse] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch('/helloworld');
      const body = await res.json();
      if (res.status !== 200) {throw Error(body.message)}
      setApiCallResponse(body.string);
      console.log(apiCallResponse)
    }
    fetchApi();
  }, [])

  return (
    <div>
      <h1>Welcome to React!</h1>
      <div>{apiCallResponse}</div>
    </div>
  );
}

export default App;
