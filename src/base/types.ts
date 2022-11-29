type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
export type MeTheme =
  | "OuterSpaceCrayola"
  | "InverseOuterSpaceCrayola"
  | "SpaceCadet"
  | "InverseSpaceCadet"
  | "AmaranthPurple"
  | "InverseAmaranthPurple"
  | "EnglishViolet"
  | "InverseEnglishViolet"
  | TRANSITIONHEX;

export type MeRegexValidate =
  | "tel"
  | "email"
  | "soc-sec"
  | "password"
  | "swe-car-plate"
  | "url"
  | RegExp;

export type AnimationType = "shake-vertically" | "shake-horizontally";
