// BudgieButton.tsx
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/system";

interface BudgieButtonProps extends MuiButtonProps {
  variantColor?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

const StyledButton = styled(MuiButton)<BudgieButtonProps>(
  ({ theme, variantColor }) => {
    let backgroundColor;
    let hoverBackgroundColor;

    switch (variantColor) {
      case "primary":
        backgroundColor = theme.palette.primary.main;
        hoverBackgroundColor = theme.palette.primary.dark;
        break;
      case "secondary":
        backgroundColor = theme.palette.secondary.main;
        hoverBackgroundColor = theme.palette.secondary.dark;
        break;
      case "danger":
        backgroundColor = theme.palette.error.main;
        hoverBackgroundColor = theme.palette.error.dark;
        break;
      default:
        backgroundColor = undefined;
        hoverBackgroundColor = undefined;
    }

    return {
      backgroundColor,
      "&:hover": {
        backgroundColor: hoverBackgroundColor,
      },
    };
  }
);

export const BudgieButton: React.FC<BudgieButtonProps> = ({
  variantColor,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant="contained"
      variantColor={variantColor}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
