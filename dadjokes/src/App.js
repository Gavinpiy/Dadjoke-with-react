import { useState, useEffect } from "react";
export default function App() {
  const [joke, setJoke] = useState("");
  async function fetchJoke() {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw Error(response.status);
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch a joke.");
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []); // Runs once after the initial render
  return (
    <div>
      <h1>Dad Joke</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Fetch Another Joke</button>
    </div>
  );
}
