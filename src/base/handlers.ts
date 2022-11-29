import { AnimationType, MeRegexValidate, MeTheme } from "./types";

export const handleColor = (
  theme: MeTheme
): {
  backgroundImage: string;
  firstColor: string;
  secondColor: string;
  borderColor: string;
} => {
  const angle = 30;
  switch (theme) {
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
      if (theme?.fromHEX) {
        return {
          backgroundImage: `linear-gradient(${angle}deg, ${theme.fromHEX} 50%,${theme.toHEX} 50%)`,
          firstColor: theme.firstColor,
          secondColor: theme.secondColor,
          borderColor: theme.fromHEX,
        };
      }
      return {
        backgroundImage: `linear-gradient(${angle}deg,#252525 50%,#fff 50%)`,
        firstColor: "#fff",
        secondColor: "#252525",
        borderColor: "#252525",
      };
  }
};

export const handleRegex = (
  regexValidation: MeRegexValidate
): RegExp | null => {
  switch (regexValidation) {
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
      return regexValidation;
  }
};

export const handleAnimation = (animationType: AnimationType, id: string) => {
  let elementAnimation: Keyframe[] | PropertyIndexedKeyframes | null;
  let elementTiming: { duration: number; iteration: number };
  const element = document.getElementById(id!);
  if (element === null) return;

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
