import React, { useState } from "react";
import Alert from "./Alert";
interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-${color}`}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
