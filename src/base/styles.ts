import React from "react";
import { handleColor } from "./handlers";
import { MeTheme } from "./types";

export const basicStyle = (
  theme: MeTheme,
  disabled: boolean,
  onClick: boolean,
  onHover: boolean,
  onFocus: boolean,
  noHoverAnimation: boolean
): React.CSSProperties => {
  return {
    borderRadius: ".8rem",
    backgroundImage: handleColor(theme)?.backgroundImage,
    opacity: disabled ? 0.5 : 1,
    color: disabled
      ? handleColor(theme!).firstColor
      : onHover && !noHoverAnimation
      ? handleColor(theme!)?.secondColor
      : handleColor(theme!)?.firstColor,
    boxShadow: disabled
      ? ""
      : onFocus
      ? `0 4px 8px 0 rgba(0,0,0,0.12), inset 0 0 0 2px ${
          handleColor(theme).firstColor
        }`
      : "0 4px 8px 0 rgba(0,0,0,0.12)",
    filter: disabled ? "grayscale(100%)" : onClick ? "brightness(.8)" : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw",
    backgroundPosition: disabled
      ? ""
      : onHover && !noHoverAnimation
      ? "100%"
      : "0%",
  };
};
