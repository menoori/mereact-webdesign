import "../style/main.scss";
// REACT
import React, { ReactElement, useState } from "react";
import { MeTheme, MeThemeMode } from "../base/types";
import { StylesManager } from "../base/StylesManager";

// NPM INSTALLS

/*
  Information about the MeButton Component
*/

interface Me_ButtonProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonStyle?: "flat" | "outline" | "raised";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon?: string;
  type?: "submit" | "button" | "reset";
  theme?: MeTheme;
  themeMode?: MeThemeMode;
  noHoverAnimation?: boolean;
  transitionY?: boolean;
}
export default function Me_Button(props: Me_ButtonProps) {
  // ----- CONSTANTS -----
  const SM = new StylesManager(props.theme, props.themeMode);
  // ----- STATE -----
  const [onClick, setOnClick] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

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
    if (!props.children) return "0";
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
    if (!props.children)
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
  const buttonStyle: React.CSSProperties = {
    ...SM.inputBasicStyle(
      props.disabled!,
      onClick,
      onHover,
      onFocus,
      props.noHoverAnimation!
    ),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: buttonHeight(),

    border: `3px solid ${SM.CSS.borderColor}`,

    transition:
      "background 300ms ease-in-out, color 300ms ease-in-out, transform 300ms cubic-bezier(0.57, 0.21, 0.69, 3.25)",

    fontSize: fontSize(),
    fontWeight: "600",
    cursor: props.disabled ? "not-allowed" : "pointer",
    transform: props.disabled
      ? ""
      : onHover && props.transitionY
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
  // ----- HANDLERS -----
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.onClick) props.onClick(e);
  };
  if (props.buttonStyle === "flat") {
    buttonStyle.backgroundImage = "none";
    buttonStyle.border = "none";
    buttonStyle.boxShadow = "none";
  } else if (props.buttonStyle === "outline") {
    buttonStyle.backgroundImage = "none";
    buttonStyle.boxShadow = "none";
  }

  return (
    <button
      className="mereact-mebutton"
      style={buttonStyle}
      type={props.type}
      onClick={(e) => handleClick(e)}
      onTouchStart={() => setOnClick(true)}
      onTouchEnd={() => setOnClick(false)}
      onMouseDown={() => setOnClick(true)}
      onMouseUp={() => setOnClick(false)}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onFocus={() => setOnFocus(true)}
      onBlur={() => setOnFocus(false)}
      disabled={props.disabled}
    >
      {props.icon && <i style={iconStyle}>{props.icon}</i>}
      <span style={spanStyle}>{props.children}</span>
    </button>
  );
}
