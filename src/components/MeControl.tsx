import React from "react";
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
  return <div>MeControl</div>;
}
