type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
export type MeTheme = "SpaceCadet" | "AmaranthPurple";

export type MeThemeMode = "dark" | "light";

export type MeRegexValidate =
  | "tel"
  | "email"
  | "soc-sec"
  | "password"
  | "swe-car-plate"
  | "url"
  | RegExp;

export type AnimationType = "shake-vertically" | "shake-horizontally";
