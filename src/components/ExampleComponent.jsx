import React, { useState, useEffect, useCallback } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useEffect with dependencies to run when `count` changes
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // Dependency on `count`

  // useEffect with cleanup (cleanup function will run before component unmounts)
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount (cleanup)');
    };
  }, []); // Empty dependency array means it only runs on mount/unmount

  return (
    <div>
      <h1>useEffect, useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>

      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default ExampleComponent;
