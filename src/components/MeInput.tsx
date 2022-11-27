import React, { useState } from "react";

type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};

interface MeInputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  color?:
    | "OuterSpaceCrayola"
    | "InverseOuterSpaceCrayola"
    | "SpaceCadet"
    | "InverseSpaceCadet"
    | "AmaranthPurple"
    | "InverseAmaranthPurple"
    | "EnglishViolet"
    | "InverseEnglishViolet"
    | TRANSITIONHEX;
}
export default function MeInput(props: MeInputProps) {
  // ----- STATE -----
  const [buttonClick, setButtonClick] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [buttonFocus, setButtonFocus] = useState(false);
  // ----- STYLING -----
  const handleColor = (): {
    backgroundImage: string;
    firstColor: HEX;
    secondColor: HEX;
    borderColor: HEX;
  } => {
    const angle = 30;
    switch (props.color) {
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
        if (props.color?.fromHEX) {
          return {
            backgroundImage: `linear-gradient(${angle}deg, ${props.color.fromHEX} 50%,${props.color.toHEX} 50%)`,
            firstColor: props.color.firstColor,
            secondColor: props.color.secondColor,
            borderColor: props.color.fromHEX,
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

  const inputStyle: React.CSSProperties = {
    paddingInline: "1.6rem",
    paddingBlock: "1.8rem",

    opacity: props.disabled ? 0.5 : 1,

    borderRadius: ".8rem",
    color: props.disabled
      ? handleColor().firstColor
      : buttonHover
      ? handleColor()?.secondColor
      : handleColor()?.firstColor,
    border: `3px solid ${handleColor()?.borderColor}`,
    filter: props.disabled
      ? "grayscale(100%)"
      : buttonClick
      ? "brightness(.8)"
      : "",
    boxShadow: props.disabled
      ? ""
      : buttonFocus
      ? `inset 0 0 0 2px ${handleColor().firstColor}`
      : "none",
    backgroundImage: handleColor()?.backgroundImage,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props.disabled ? "" : buttonHover ? "100%" : "0%",
    transition:
      "background 300ms ease-in-out, color 300ms ease-in-out, transform 300ms cubic-bezier(0.57, 0.21, 0.69, 3.25)",

    fontSize: "1.6rem",
    fontWeight: "400",

    cursor: props.disabled ? "not-allowed" : "text",
  };
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      style={inputStyle}
      required={props.required}
      onTouchStart={() => setButtonClick(true)}
      onTouchEnd={() => setButtonClick(false)}
      onMouseDown={() => setButtonClick(true)}
      onMouseUp={() => setButtonClick(false)}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      onFocus={() => setButtonFocus(true)}
      onBlur={() => setButtonFocus(false)}
      disabled={props.disabled}
    />
  );
}
