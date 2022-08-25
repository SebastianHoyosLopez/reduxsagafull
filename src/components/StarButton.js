import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";

const StarButton = ({ favorite, onClick }) => {
  const Icon = favorite ? StarIcon : StarOutlineIcon;
  return (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  );
};
export default StarButton;
