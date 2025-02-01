"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1); // Increment counter every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Hello, World!</h1>
      <p>This is your very simple test app.</p>
      <p>Counter: {counter}</p>
    </div>
  );
}
