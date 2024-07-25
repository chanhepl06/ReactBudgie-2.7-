import React from "react";
import "@/assets/styles/scss/components/_buttons.scss"; // Import the SCSS file

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
