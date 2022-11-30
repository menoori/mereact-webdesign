import "../style/main.scss";
// REACT
import React, { useEffect, useState } from "react";

// NPM INSTALLS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { handleAnimation, handleColor, handleRegex } from "../base/handlers";
import { MeRegexValidate, MeTheme } from "../base/types";
import { basicStyle } from "../base/styles";

/*
  Information about the MeInput Component
*/

type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};

interface MeInputProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regexValidation?: MeRegexValidate;
  type?:
    | "password"
    | "date"
    | "datetime-local"
    | "email"
    | "number"
    | "time"
    | "tel"
    | "url"
    | undefined;
  noValidationAnimation?: boolean;
  disabled?: boolean;
  hideIcon?: boolean;
  label?: string;
  placeholder?: string;
  required?: boolean;
  validationColor?: "dark" | "light";
  noHoverAnimation?: boolean;
  theme?: MeTheme;
}
export default function MeInput(props: MeInputProps) {
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
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const [validate, setValidate] = useState<"success" | "neutral" | "error">(
    "neutral"
  );

  // ----- USE HOOKS -----
  useEffect(() => {
    try {
      if (!props.id && props.regexValidation && !props.noValidationAnimation) {
        console.log("Include id to have animation on your validation");
      }
      if (
        (props.type === "date" || props.type === "datetime-local") &&
        props.placeholder
      )
        throw new Error("date and datetime-local can't have a placeholder");
    } catch (error) {
      window.alert(error);
    }
  }, []);

  // ----- HANDLER FUNCTIONS -----

  const handleIcon = (): JSX.Element | null => {
    switch (props.type) {
      case "date" || "datetime-local":
        return <FontAwesomeIcon icon={faCalendar} style={iconStyle} />;
      case "password":
        return (
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            style={iconStyle}
            onClick={() => setShowPassword(!showPassword)}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          />
        );
      case "email":
        return <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />;
      case "time":
        return <FontAwesomeIcon icon={faStopwatch} style={iconStyle} />;
      case "tel":
        return <FontAwesomeIcon icon={faPhone} style={iconStyle} />;
      case "url":
        return <FontAwesomeIcon icon={faGlobe} style={iconStyle} />;
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
    setValue(e.target.value);
    if (!props.regexValidation) return;
    const isValid = RegExp(handleRegex(props.regexValidation)!).test(
      e.target.value
    );
    if (isValid) {
      if (validate === "success") return;
      setValidate("success");
      if (!props.noValidationAnimation) return;
      handleAnimation("shake-vertically", props.id!);
    } else {
      setValidate("neutral");
    }
  };

  const handleOnBlur = () => {
    setOnFocus(false);
    if (!props.regexValidation) return;
    if (value === "") {
      setValidate("neutral");
      return;
    }
    const isValid = RegExp(handleRegex(props.regexValidation)!).test(value);
    if (!isValid) {
      if (validate === "error") return;
      setValidate("error");
      if (!props.noValidationAnimation) return;
      handleAnimation("shake-horizontally", props.id!);
    }
  };

  // ----- STYLING -----

  const wrapperStyle: React.CSSProperties = {
    position: "relative",

    width: "fit-content",
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: props.type === "password" ? "" : "1.6rem",
    right: props.type === "password" ? "1.6rem" : "",
    top: "50%",
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

    cursor: props.type === "password" ? "pointer" : "",

    transform: "translateY(-50%)",
    transition: "color 300ms ease-in-out",
  };

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    left:
      handleIcon() === null || props.type === "password" ? "1.9rem" : "3.9rem",
    top: onFocus || value !== "" ? "1.2rem" : "50%",

    color:
      onHover && !props.noHoverAnimation
        ? handleColor(props.theme!).secondColor
        : handleColor(props.theme!).firstColor,

    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: 1,
    pointerEvents: "none",

    transition: "200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transformOrigin: "top left",
    transform: onFocus || value !== "" ? "scale(.6)" : "translateY(-50%)",
  };

  const inputStyle: React.CSSProperties = {
    ...basicStyle(
      props.theme!,
      props.disabled!,
      onClick,
      onHover,
      onFocus,
      props.noHoverAnimation!
    ),
    paddingInline:
      handleIcon() !== null && !props.hideIcon
        ? props.type === "password"
          ? "1.6rem 3.9rem"
          : "3.6rem 1.6rem"
        : "1.6rem",
    paddingBlock: props.label ? "2rem 1.2rem" : "1.8rem",

    border:
      validate === "success"
        ? `3px solid ${successColor}`
        : validate === "error"
        ? `3px solid ${errorColor}`
        : `3px solid ${handleColor(props.theme!)?.borderColor}`,

    transition: "background 300ms ease-in-out, color 300ms ease-in-out",

    fontSize: "1.6rem",
    fontWeight: "400",

    cursor: props.disabled ? "not-allowed" : "text",
  };

  return (
    <div style={wrapperStyle} id={props.id}>
      <input
        id={`input-${props.id}`}
        value={value}
        type={showPassword ? "text" : props.type}
        placeholder={onFocus ? props.placeholder : ""}
        style={inputStyle}
        required={props.required}
        onTouchStart={() => setOnClick(true)}
        onTouchEnd={() => setOnClick(false)}
        onMouseDown={() => setOnClick(true)}
        onMouseUp={() => setOnClick(false)}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onFocus={() => setOnFocus(true)}
        onBlur={handleOnBlur}
        disabled={props.disabled}
        onChange={(e) => handleChange(e)}
      />
      {validate === "success" ? (
        <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
      ) : validate === "error" ? (
        <FontAwesomeIcon icon={faTimesCircle} style={iconStyle} />
      ) : (
        handleIcon()
      )}
      {props.type !== "date" && props.type !== "datetime-local" && (
        <label id={`label-${props.id}`} style={labelStyle}>
          {props.label}
        </label>
      )}
    </div>
  );
}
