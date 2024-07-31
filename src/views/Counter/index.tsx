import styles from "./style.module.css";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleAdd = () => {
    setCount(count + inputValue);
    setInputValue(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div className={styles.inputContainer}>
        <input
          type="number"
          value={inputValue || ""}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Counter;
