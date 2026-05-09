'use client';

import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState(14);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Now serving: #{number}</h1>
      <button onClick={() => setNumber(number + 1)}>
        Next customer
      </button>
    </div>
  );
}