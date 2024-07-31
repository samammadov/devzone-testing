import "./style.module.css";
import React, { useEffect, useState } from "react";

const ToggleComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? "Hide Element" : "Show Element"}
      </button>
      {isVisible && (
        <div className="toggleElement">This is a toggled element!</div>
      )}
    </div>
  );
};

export default ToggleComponent;
