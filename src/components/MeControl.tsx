import React, { useState } from "react";
import { StylesManager } from "../base/StylesManager";
import { MeTheme, MeThemeMode } from "../base/types";

interface MeInputProps {
  id?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "checkbox" | "radio" | "slider";
  disabled?: boolean;
  label?: string;
  required?: boolean;
  theme?: MeTheme;
  themeMode?: MeThemeMode;
  noHoverAnimation?: boolean;
}
export default function MeControl(props: MeInputProps) {
  // ----- CONSTANTS -----
  const SM = new StylesManager(props.theme, props.themeMode);

  // ----- STATE -----
  const [onClick, setOnClick] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const wrapperStyle: React.CSSProperties = {
    width: "1.6rem",
    height: "1.6rem",
    backgroundColor: SM.inputCSSStyle.firstColor,
  };

  return (
    <div style={wrapperStyle} id={props.id}>
      <span>HEIUHFIOFÖJ</span>
    </div>
  );
}
