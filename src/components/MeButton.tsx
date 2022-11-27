// REACT
import React, { useState } from "react";

// NPM INSTALLS

/*
  Information about the MeButton Component
*/

type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
interface MeButtonProps {
  callback?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon?: string;
  text?: string;
  transitionColor?:
    | "OuterSpaceCrayola"
    | "InverseOuterSpaceCrayola"
    | "SpaceCadet"
    | "InverseSpaceCadet"
    | "AmaranthPurple"
    | "InverseAmaranthPurple"
    | "EnglishViolet"
    | "InverseEnglishViolet"
    | TRANSITIONHEX;
  transitionY?: boolean;
}
export default function MeButton(props: MeButtonProps) {
  // ----- STATE -----
  const [buttonClick, setButtonClick] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonFocus, setButtonFocus] = useState(false);

  // ----- USE HOOKS -----

  // ----- STYLING -----
  const fontSize = (): string => {
    return props.size === "small" ? "1.4rem" : "1.6rem";
  };
  const buttonHeight = (): string => {
    return props.size === "small"
      ? "3.2rem"
      : props.size === "medium"
      ? "4.4rem"
      : "5.2rem";
  };
  const spanPaddingInline = (): string => {
    if (!props.text) return "0";
    if (!props.icon)
      return props.size === "small"
        ? "1.6rem"
        : props.size === "medium"
        ? "2.4rem"
        : "3.2rem";
    return props.size === "small"
      ? ".4rem 1.6rem"
      : props.size === "medium"
      ? ".8rem 2.4rem"
      : ".8rem 3.2rem";
  };
  const iconPaddingInline = (): string => {
    if (!props.icon) return "0";
    if (!props.text)
      return props.size === "small"
        ? ".8rem"
        : props.size === "medium"
        ? "1.2rem"
        : "1.4rem";
    return props.size === "small"
      ? "1.2rem 0"
      : props.size === "medium"
      ? "2.0rem 0"
      : "2.4rem 0";
  };
  const iconSize = (): string => {
    return props.size === "small"
      ? "1.6rem"
      : props.size === "medium"
      ? "2.0rem"
      : "2.4rem";
  };

  const handleColor = (): {
    backgroundImage: string;
    firstColor: HEX;
    secondColor: HEX;
    borderColor: HEX;
  } => {
    const angle = 30;
    switch (props.transitionColor) {
      case "OuterSpaceCrayola":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#F6F7F5 50%,#2E3739 50%)`,
          firstColor: "#2E3739",
          secondColor: "#F6F7F5",
          borderColor: "#F6F7F5",
        };
      case "InverseOuterSpaceCrayola":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#2E3739 50%,#F6F7F5 50%)`,
          firstColor: "#F6F7F5",
          secondColor: "#2E3739",
          borderColor: "#2E3739",
        };
      case "SpaceCadet":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#F6F7F5 50%,#283A68 50%)`,
          firstColor: "#283A68",
          secondColor: "#F6F7F5",
          borderColor: "#F6F7F5",
        };
      case "InverseSpaceCadet":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#283A68 50%,#F6F7F5 50%)`,
          firstColor: "#F6F7F5",
          secondColor: "#283A68",
          borderColor: "#283A68",
        };
      case "AmaranthPurple":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#F6F7F5 50%,#9E3A53 50%)`,
          firstColor: "#9E3A53",
          secondColor: "#F6F7F5",
          borderColor: "#F6F7F5",
        };
      case "InverseAmaranthPurple":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#9E3A53 50%,#F6F7F5 50%)`,
          firstColor: "#F6F7F5",
          secondColor: "#9E3A53",
          borderColor: "#9E3A53",
        };
      case "EnglishViolet":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#F6F7F5 50%,#4A3A50 50%)`,
          firstColor: "#4A3A50",
          secondColor: "#F6F7F5",
          borderColor: "#F6F7F5",
        };
      case "InverseEnglishViolet":
        return {
          backgroundImage: `linear-gradient(${angle}deg,#4A3A50 50%,#F6F7F5 50%)`,
          firstColor: "#F6F7F5",
          secondColor: "#4A3A50",
          borderColor: "#4A3A50",
        };
      default:
        if (props.transitionColor?.fromHEX) {
          return {
            backgroundImage: `linear-gradient(${angle}deg, ${props.transitionColor.fromHEX} 50%,${props.transitionColor.toHEX} 50%)`,
            firstColor: props.transitionColor.firstColor,
            secondColor: props.transitionColor.secondColor,
            borderColor: props.transitionColor.fromHEX,
          };
        }
        return {
          backgroundImage: `linear-gradient(${angle}deg,#252525 50%,#fff 50%)`,
          firstColor: "#fff",
          secondColor: "#252525",
          borderColor: "#252525",
        };
    }
  };

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    opacity: props.disabled ? 0.5 : 1,
    height: buttonHeight(),

    backgroundImage: handleColor()?.backgroundImage,
    borderRadius: ".8rem",
    color: props.disabled
      ? handleColor().firstColor
      : buttonHover
      ? handleColor()?.secondColor
      : handleColor()?.firstColor,
    border: `3px solid ${handleColor()?.borderColor}`,
    boxShadow: props.disabled
      ? ""
      : buttonFocus
      ? `inset 0 0 0 2px ${handleColor().firstColor}`
      : "none",
    filter: props.disabled
      ? "grayscale(100%)"
      : buttonClick
      ? "brightness(.8)"
      : "",
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props.disabled ? "" : buttonHover ? "100%" : "0%",
    transition:
      "background 300ms ease-in-out, color 300ms ease-in-out, transform 300ms cubic-bezier(0.57, 0.21, 0.69, 3.25)",

    fontSize: fontSize(),
    fontWeight: "600",

    cursor: props.disabled ? "not-allowed" : "pointer",
    transform: props.disabled
      ? ""
      : buttonHover && props.transitionY
      ? "translateY(-0.5rem)"
      : "translateY(0)",
  };

  const spanStyle: React.CSSProperties = {
    paddingInline: spanPaddingInline(),
  };

  const iconStyle: React.CSSProperties = {
    paddingInline: iconPaddingInline(),
    fontSize: iconSize(),
  };

  return (
    <button
      className="mereact-mebutton"
      style={buttonStyle}
      onClick={props.callback}
      onTouchStart={() => setButtonClick(true)}
      onTouchEnd={() => setButtonClick(false)}
      onMouseDown={() => setButtonClick(true)}
      onMouseUp={() => setButtonClick(false)}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      onFocus={() => setButtonFocus(true)}
      onBlur={() => setButtonFocus(false)}
      disabled={props.disabled}
    >
      <i style={iconStyle}>{props.icon}</i>
      <span style={spanStyle}>{props.text}</span>
    </button>
  );
}