import React, { useState } from "react";

// NPM INSTALLS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
/*
  Information about the MeInput Component
*/

type AnimationType = "shake-vertically" | "shake-horizontally";
type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
interface MeInputFileProps {
  id: string;
  onSelectFile?: (data: string) => void;
  noValidationAnimation?: boolean;
  disabled?: boolean;
  label?: string;
  hideIcon?: boolean;
  required?: boolean;
  validationColor?: "dark" | "light";
  noHoverAnimation?: boolean;
  theme?:
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
export default function MeInputFile(props: MeInputFileProps) {
  // ----- CONSTANTS -----
  const successColor =
    props.validationColor === "dark"
      ? "#388e3c"
      : props.validationColor === "light"
      ? "#81c784"
      : "#66bb6a";
  const errorColor =
    props.validationColor === "dark"
      ? "#d32f2f"
      : props.validationColor === "light"
      ? "#e57373"
      : "#f44336";

  // ----- STATE -----
  const [onClick, setOnClick] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [fileName, setFileName] = useState<string>();
  const [validate, setValidate] = useState<"success" | "neutral" | "error">(
    "neutral"
  );

  // ----- HANDLER FUNCTIONS -----

  const handleColor = (): {
    backgroundImage: string;
    firstColor: HEX;
    secondColor: HEX;
    borderColor: HEX;
  } => {
    const angle = 30;
    switch (props.theme) {
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
        if (props.theme?.fromHEX) {
          return {
            backgroundImage: `linear-gradient(${angle}deg, ${props.theme.fromHEX} 50%,${props.theme.toHEX} 50%)`,
            firstColor: props.theme.firstColor,
            secondColor: props.theme.secondColor,
            borderColor: props.theme.fromHEX,
          };
        }
        return {
          backgroundImage: `linear-gradient(${angle}deg,#fff 50%,#252525 50%)`,
          firstColor: "#252525",
          secondColor: "#fff",
          borderColor: "#fff",
        };
    }
  };

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files![0].name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setValidate("success");
      if (props.onSelectFile) props.onSelectFile(result);
    };
    reader.readAsText(e.target.files![0]);
  };
  // ----- STYLING -----

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    // width: "fit-content",
  };

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",

    paddingInline: !props.hideIcon ? "3.6rem 1.6rem" : "1.6rem",
    paddingBlock: "1.8rem",

    opacity: props.disabled ? 0.5 : 1,

    borderRadius: ".8rem",
    color: props.disabled
      ? handleColor().firstColor
      : onHover && !props.noHoverAnimation
      ? handleColor()?.secondColor
      : handleColor()?.firstColor,
    border:
      validate === "success"
        ? `3px solid ${successColor}`
        : validate === "error"
        ? `3px solid ${errorColor}`
        : `3px solid ${handleColor()?.borderColor}`,
    filter: props.disabled
      ? "grayscale(100%)"
      : onClick
      ? "brightness(.8)"
      : "",
    boxShadow: props.disabled
      ? ""
      : onFocus
      ? `inset 0 0 0 2px ${handleColor().firstColor}`
      : "none",
    backgroundImage: handleColor()?.backgroundImage,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props.disabled
      ? ""
      : onHover && !props.noHoverAnimation
      ? "100%"
      : "0%",

    // transform: "translateY(-50%)",
    transition: "background 300ms ease-in-out, color 300ms ease-in-out",

    fontSize: "1.6rem",
    fontWeight: "400",

    cursor: props.disabled ? "not-allowed" : "pointer",
  };

  const inputStyle: React.CSSProperties = {
    display: "none",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: "1.6rem",
    top: "2.6rem",
    width: props.hideIcon ? "0" : "",

    opacity: props.hideIcon ? "0" : "1",
    color:
      validate === "success"
        ? successColor
        : validate === "error"
        ? errorColor
        : onHover && !props.noHoverAnimation
        ? handleColor().secondColor
        : handleColor().firstColor,

    fontSize: "1.2rem",

    transition: "color 300ms ease-in-out",
  };

  return (
    <div style={wrapperStyle} id={props.id}>
      <input
        id={`input-${props.id}`}
        type="file"
        // placeholder={onFocus ? props.placeholder : ""}
        style={inputStyle}
        required={props.required}
        disabled={props.disabled}
        accept=".txt,.json"
        tabIndex={-1}
        onChange={(e) => handleSelectFile(e)}
      />
      <label
        htmlFor={`input-${props.id}`}
        style={labelStyle}
        onTouchStart={() => setOnClick(true)}
        onTouchEnd={() => setOnClick(false)}
        onMouseDown={() => setOnClick(true)}
        onMouseUp={() => setOnClick(false)}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        tabIndex={0}
      >
        {fileName ? fileName : props.label}
      </label>
      {validate === "success" ? (
        <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
      ) : validate === "error" ? (
        <FontAwesomeIcon icon={faTimesCircle} style={iconStyle} />
      ) : (
        <FontAwesomeIcon icon={faFile} style={iconStyle} />
      )}
    </div>
  );
}
