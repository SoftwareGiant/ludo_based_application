import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { IconButton } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HelpButton = ({ dark }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      variant="text"
      color="blue-gray"
      onClick={() => navigate("/help")}
    >
      <Icon
        icon="material-symbols:info-outline"
        className={`${dark ? "text-black" : "text-white"}`}
        width="32"
      />
    </IconButton>
  );
};

export default HelpButton;
