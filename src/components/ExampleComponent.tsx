// src/components/ExampleComponent.tsx
import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    padding: "10px 20px",
    color: theme.palette.text.secondary,
  },
  primary: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.secondary,
  },
  disabled: {
    backgroundColor: "gray",
    cursor: "not-allowed",
  },
}));

interface ExampleComponentProps {
  isPrimary?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  isPrimary,
  isDisabled,
  children,
}) => {
  const classes = useStyles();

  return (
    <Button
      className={`${classes.button} ${isPrimary ? classes.primary : ""} ${
        isDisabled ? classes.disabled : ""
      }`}
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export default ExampleComponent;
