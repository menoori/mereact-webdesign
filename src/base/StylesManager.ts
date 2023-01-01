// const enum THEMES {
//   WHITE = "#F6F7F5",
//   BLACK = "#252525",
//   OUTERSPACECRAYOLA = "#2E3739",
//   SPACECADET = "#283A68",
//   AMARANTHPURPLE = "#9E3A53",
//   ENGLISHVIOLET = "#4A3A50",
// }

import { MeTheme, MeThemeMode } from "./types";

export class StylesManager {
  static white = "#F6F7F5";
  static black = "#252525";
  static spaceCadet = "#283A68";
  static amaranthPurple = "#9E3A53";

  private _gradientAngle = 30;
  private _theme: MeTheme | undefined;
  private _themeMode: MeThemeMode | undefined;

  private _CSS: {
    backgroundImage: string;
    firstColor: string;
    secondColor: string;
    borderColor: string;
  };
  private _successColor: string;
  private _errorColor: string;

  constructor(theme?: MeTheme, themeMode?: MeThemeMode) {
    this._theme = theme;
    this._themeMode = themeMode;

    this._successColor =
      themeMode === "dark"
        ? "#388e3c"
        : themeMode === "light"
        ? "#81c784"
        : "#66bb6a";

    this._errorColor =
      themeMode === "dark"
        ? "#d32f2f"
        : themeMode === "light"
        ? "#e57373"
        : "#f44336";

    switch (theme) {
      case "SpaceCadet":
        if (themeMode === "dark") {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.spaceCadet} 50%,${StylesManager.white} 50%)`,
            firstColor: StylesManager.white,
            secondColor: StylesManager.spaceCadet,
            borderColor: StylesManager.spaceCadet,
          };
        } else {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.white} 50%,${StylesManager.spaceCadet} 50%)`,
            firstColor: StylesManager.spaceCadet,
            secondColor: StylesManager.white,
            borderColor: StylesManager.white,
          };
        }
        break;
      case "AmaranthPurple":
        if (themeMode === "dark") {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.amaranthPurple} 50%,${StylesManager.white} 50%)`,
            firstColor: StylesManager.white,
            secondColor: StylesManager.amaranthPurple,
            borderColor: StylesManager.amaranthPurple,
          };
        } else {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.white} 50%,${StylesManager.amaranthPurple} 50%)`,
            firstColor: StylesManager.amaranthPurple,
            secondColor: StylesManager.white,
            borderColor: StylesManager.white,
          };
        }
        break;
      default:
        if (themeMode === "dark") {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.black} 50%,${StylesManager.white} 50%)`,
            firstColor: StylesManager.white,
            secondColor: StylesManager.black,
            borderColor: StylesManager.black,
          };
        } else {
          this._CSS = {
            backgroundImage: `linear-gradient(${this._gradientAngle}deg,${StylesManager.white} 50%,${StylesManager.black} 50%)`,
            firstColor: StylesManager.black,
            secondColor: StylesManager.white,
            borderColor: StylesManager.white,
          };
        }
    }
  }

  get successColor() {
    return this._successColor;
  }

  get errorColor() {
    return this._errorColor;
  }

  get CSS() {
    return this._CSS;
  }

  inputBasicStyle = (
    disabled: boolean,
    onClick: boolean,
    onHover: boolean,
    onFocus: boolean,
    noHoverAnimation: boolean
  ): React.CSSProperties => {
    return {
      borderRadius: ".8rem",
      backgroundImage: this._CSS.backgroundImage,
      opacity: disabled ? 0.5 : 1,
      color: disabled
        ? this._CSS.firstColor
        : onHover && !noHoverAnimation
        ? this._CSS.secondColor
        : this._CSS.firstColor,
      boxShadow: disabled
        ? ""
        : onFocus
        ? `0 4px 8px 0 rgba(0,0,0,0.12), inset 0 0 0 2px ${this._CSS.firstColor}`
        : "0 4px 8px 0 rgba(0,0,0,0.12)",
      filter: disabled ? "grayscale(100%)" : onClick ? "brightness(.8)" : "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100vw",
      backgroundPosition: disabled
        ? ""
        : onHover && !noHoverAnimation
        ? "100%"
        : "0%",
    };
  };
}
