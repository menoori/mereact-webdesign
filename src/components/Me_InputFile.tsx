import React, { useState } from "react";

// NPM INSTALLS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { MeTheme } from "../base/types";
import { handleColor } from "../base/handlers";
import { basicStyle } from "../base/styles";
/*
  Information about the MeInputFile Component
*/

type AnimationType = "shake-vertically" | "shake-horizontally";
type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
interface Me_InputFileProps {
  id?: string;
  onSelectFile?: (data: string) => void;
  noValidationAnimation?: boolean;
  disabled?: boolean;
  label?: string;
  hideIcon?: boolean;
  required?: boolean;
  validationColor?: "dark" | "light";
  noHoverAnimation?: boolean;
  theme?: MeTheme;
}
export default function Me_InputFile(props: Me_InputFileProps) {
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
    ...basicStyle(
      props.theme!,
      props.disabled!,
      onClick,
      onHover,
      onFocus,
      props.noHoverAnimation!
    ),
    position: "absolute",
    top: "50%",

    paddingInline: !props.hideIcon ? "3.6rem 1.6rem" : "1.6rem",
    paddingBlock: "1.8rem",

    border:
      validate === "success"
        ? `3px solid ${successColor}`
        : validate === "error"
        ? `3px solid ${errorColor}`
        : `3px solid ${handleColor(props.theme!)?.borderColor}`,

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
        ? handleColor(props.theme!).secondColor
        : handleColor(props.theme!).firstColor,

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
