import { Colors } from "./ColorsManager";
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
        backgroundImage: `linear-gradient(${angle}deg,${Colors.white} 50% ${Colors.outerSpaceCrayola} 50%)`,
        firstColor: Colors.outerSpaceCrayola,
        secondColor: Colors.white,
        borderColor: Colors.white,
      };
    case "InverseOuterSpaceCrayola":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.outerSpaceCrayola} 50%,${Colors.white} 50%)`,
        firstColor: Colors.white,
        secondColor: Colors.outerSpaceCrayola,
        borderColor: Colors.outerSpaceCrayola,
      };
    case "SpaceCadet":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.white} 50%,${Colors.spaceCadet} 50%)`,
        firstColor: Colors.spaceCadet,
        secondColor: Colors.white,
        borderColor: Colors.white,
      };
    case "InverseSpaceCadet":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.spaceCadet} 50%,${Colors.white} 50%)`,
        firstColor: Colors.white,
        secondColor: Colors.spaceCadet,
        borderColor: Colors.spaceCadet,
      };
    case "AmaranthPurple":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.white} 50%,${Colors.amaranthPurple} 50%)`,
        firstColor: Colors.amaranthPurple,
        secondColor: Colors.white,
        borderColor: Colors.white,
      };
    case "InverseAmaranthPurple":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.amaranthPurple} 50%,${Colors.white} 50%)`,
        firstColor: Colors.white,
        secondColor: Colors.amaranthPurple,
        borderColor: Colors.amaranthPurple,
      };
    case "EnglishViolet":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.white} 50%,${Colors.englishViolet} 50%)`,
        firstColor: Colors.englishViolet,
        secondColor: Colors.white,
        borderColor: Colors.white,
      };
    case "InverseEnglishViolet":
      return {
        backgroundImage: `linear-gradient(${angle}deg,${Colors.englishViolet} 50%,${Colors.white} 50%)`,
        firstColor: Colors.white,
        secondColor: Colors.englishViolet,
        borderColor: Colors.englishViolet,
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
        backgroundImage: `linear-gradient(${angle}deg,${Colors.black} 50%,${Colors.white} 50%)`,
        firstColor: Colors.white,
        secondColor: Colors.black,
        borderColor: Colors.black,
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
