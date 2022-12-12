export class Colors {
  static white = "#F6F7F5";
  static black = "#252525";
  static outerSpaceCrayola = "#2E3739";
  static spaceCadet = "#283A68";
  static amaranthPurple = "#9E3A53";
  static englishViolet = "#4A3A50";

  theme: "light" | "dark" | undefined;
  constructor(theme?: "light" | "dark") {
    this.theme = theme;
  }
}
