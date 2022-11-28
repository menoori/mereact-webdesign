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

interface MeInputProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regexValidation?:
    | "tel"
    | "email"
    | "soc-sec"
    | "password"
    | "swe-car-plate"
    | "url"
    | RegExp;
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
  setError?: boolean;
  successColor?: "dark" | "light";
  errorColor?: "dark" | "light";
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
export default function MeInput(props: MeInputProps) {
  // ----- CONSTANTS -----
  const successColor =
    props.successColor === "dark"
      ? "#388e3c"
      : props.successColor === "light"
      ? "#81c784"
      : "#66bb6a";
  const errorColor =
    props.errorColor === "dark"
      ? "#d32f2f"
      : props.errorColor === "light"
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
      if (props.setError) {
        setValidate("error");
      } else {
        setValidate("neutral");
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

  const handleRegex = (): RegExp | null => {
    switch (props.regexValidation) {
      case "soc-sec":
        return /^(19|20|21)?[0-9]{6}[-]?[0-9]{4}$/;
      case "tel":
        return /^[0-9]{8,13}$/;
      case "password":
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      case "swe-car-plate":
        return /^[a-zA-Z]{3}([0-9]{3}|[0-9]{2}[a-zA-Z])$/;
      case "email":
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      case "url":
        return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      default:
        if (props.regexValidation) return props.regexValidation;
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
    setValue(e.target.value);
    if (props.setError) {
      setValidate("error");
      return;
    }
    if (!props.regexValidation) return;
    const isValid = RegExp(handleRegex()!).test(e.target.value);
    if (isValid) {
      if (validate === "success") return;
      handleAnimation("shake-vertically");
      setValidate("success");
    } else {
      setValidate("neutral");
    }
  };

  const handleAnimation = (animationType: AnimationType) => {
    let elementAnimation: Keyframe[] | PropertyIndexedKeyframes | null;
    let elementTiming: { duration: number; iteration: number };
    const element = document.getElementById(props.id!);
    if (element === null || props.noValidationAnimation) return;

    switch (animationType) {
      case "shake-vertically":
        elementAnimation = [
          { transform: "translateY(0)" },
          { transform: "translateY(0.5rem)" },
          { transform: "translateY(-0.5rem)" },
          { transform: "translateY(0)" },
        ];
        elementTiming = {
          duration: 200,
          iteration: 2,
        };
        element!.animate(elementAnimation, elementTiming);
        break;
      case "shake-horizontally":
        elementAnimation = [
          { transform: "translateX(0)" },
          { transform: "translateX(0.5rem)" },
          { transform: "translateX(-0.5rem)" },
          { transform: "translateX(0)" },
        ];
        elementTiming = {
          duration: 200,
          iteration: 2,
        };
        element!.animate(elementAnimation, elementTiming);
        break;
      default:
        break;
    }
  };

  const handleOnBlur = () => {
    setOnFocus(false);
    if (!props.regexValidation) return;
    if (value === "") {
      setValidate("neutral");
      return;
    }
    const isValid = RegExp(handleRegex()!).test(value);
    if (!isValid) {
      if (validate === "error") return;
      setValidate("error");
      handleAnimation("shake-horizontally");
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
        ? handleColor().secondColor
        : handleColor().firstColor,

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
        ? handleColor().secondColor
        : handleColor().firstColor,

    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: 1,
    pointerEvents: "none",

    transition: "200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transformOrigin: "top left",
    transform: onFocus || value !== "" ? "scale(.6)" : "translateY(-50%)",
  };

  const inputStyle: React.CSSProperties = {
    paddingInline:
      handleIcon() !== null && !props.hideIcon
        ? props.type === "password"
          ? "1.6rem 3.9rem"
          : "3.6rem 1.6rem"
        : "1.6rem",
    paddingBlock: props.label ? "2rem 1.2rem" : "1.8rem",

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
    transition:
      "background 300ms ease-in-out, color 300ms ease-in-out, transform 300ms cubic-bezier(0.57, 0.21, 0.69, 3.25)",

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
