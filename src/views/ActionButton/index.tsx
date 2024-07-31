import React from "react";

interface ActionButtonProps {
  onClick: () => void;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ActionButton;
