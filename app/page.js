
'use client';

import { useState } from 'react';

const STARTING_NUMBER = 10;

export default function Home() {
  const [number, setNumber] = useState(STARTING_NUMBER);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Now serving: #{number}</h1>
      <button onClick={() => setNumber(number - 1)}>
        Previous
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Next customer
      </button>
      <button onClick={() => setNumber(STARTING_NUMBER)}>
        Reset
      </button>
    </div>
  );
}