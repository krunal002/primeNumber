import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [prime, setPrime] = useState("");
  return (
    <div className="App">
      <h1>Prime Number 🤔</h1>
      <h4>Enter the number</h4>
      <input onChange={checkPrime}></input>
      <h2>{prime}</h2>
    </div>
  );

  function checkPrime(event) {
    var userInput = event.target.value;
    var count = 0;
    for (var i = 0; i < Number(userInput); i++) {
      if (Number(userInput) % i === 0) {
        count++;
      }
    }
    var prime = "not prime number";
    if (Number(userInput) === 1 || Number(userInput) === 0) {
      prime = "Not a prime number nor a composite number";
    }
    if (Number(userInput) === 0) {
      prime = "";
    } else if (Number(count) === 1) {
      prime = "Prime number";
    }
    setPrime(prime);
  }
}
