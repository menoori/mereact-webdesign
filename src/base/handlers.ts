import { AnimationType, MeRegexValidate, MeTheme } from "./types";

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
