import "../style/main.scss";
// REACT
import React, { useEffect, useState } from "react";

// INTERNAL IMPORTS
import { MeRegexValidate, MeTheme, MeThemeMode } from "../base/types";
import { handleAnimation, handleRegex } from "../base/handlers";

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
import { faT } from "@fortawesome/free-solid-svg-icons";
import { StylesManager } from "../base/StylesManager";

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

interface Me_InputProps {
  id?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
    | "textarea"
    | undefined;
  noValidationAnimation?: boolean;
  disabled?: boolean;
  hideIcon?: boolean;
  label?: string;
  placeholder?: string;
  required?: boolean;
  themeMode?: MeThemeMode;
  noHoverAnimation?: boolean;
  theme?: MeTheme;
}
export default function Me_Input(props: Me_InputProps) {
  // ----- CONSTANTS -----
  const SM = new StylesManager(props.theme, props.themeMode);
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
      case "textarea":
        return <FontAwesomeIcon icon={faT} style={iconStyle} />;
      default:
        return null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        ? SM.successColor
        : validate === "error"
        ? SM.errorColor
        : onHover && !props.noHoverAnimation
        ? SM.CSS.secondColor
        : SM.CSS.firstColor,

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
        ? SM.CSS.secondColor
        : SM.CSS.firstColor,

    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: 1,
    pointerEvents: "none",

    transition: "200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transformOrigin: "top left",
    transform: onFocus || value !== "" ? "scale(.6)" : "translateY(-50%)",
  };

  const inputStyle: React.CSSProperties = {
    ...SM.inputBasicStyle(
      props.disabled!,
      onClick,
      onHover,
      onFocus,
      props.noHoverAnimation!
    ),
    display: "flex",
    alignItems: "center",
    paddingInline:
      handleIcon() !== null && !props.hideIcon
        ? props.type === "password"
          ? "1.6rem 3.9rem"
          : "3.6rem 1.6rem"
        : "1.6rem",
    paddingBlock: props.label ? "2rem 1.2rem" : "1.8rem",

    border:
      validate === "success"
        ? `3px solid ${SM.successColor}`
        : validate === "error"
        ? `3px solid ${SM.errorColor}`
        : `3px solid ${SM.CSS.borderColor}`,

    transition: "background 300ms ease-in-out, color 300ms ease-in-out",

    fontSize: "1.6rem",
    fontWeight: "400",

    cursor: props.disabled ? "not-allowed" : "text",
  };

  return (
    <div style={wrapperStyle} id={props.id}>
      {props.type === "textarea" ? (
        <textarea
          id={`input-${props.id}`}
          value={value}
          style={inputStyle}
          placeholder={onFocus ? props.placeholder : ""}
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
      ) : (
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
      )}

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
