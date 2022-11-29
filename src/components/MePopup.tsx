import React, { ReactElement, ReactNode } from "react";

// NPM INSTALLS
import { css, StyleSheet } from "aphrodite";
/*
  Information about the MePopup Component
*/
type HEX = `#${string}`;
type TRANSITIONHEX = {
  fromHEX: HEX;
  toHEX: HEX;
  firstColor: HEX;
  secondColor: HEX;
};
interface MePopupProps {
  children: ReactElement[];
  topBarTitle?: string;
  theme?:
    | "OuterSpaceCrayola"
    | "InverseOuterSpaceCrayola"
    | "SpaceCadet"
    | "InverseSpaceCadet"
    | "AmaranthPurple"
    | "InverseAmaranthPurple"
    | "EnglishViolet"
    | "InverseEnglishViolet"
    | TRANSITIONHEX;
}
export default function MePopup(props: MePopupProps) {
  // ----- HANDLER FUNCTIONS -----

  const handleColor = (): {
    backgroundImage: string;
    firstColor: HEX;
    secondColor: HEX;
    borderColor: HEX;
  } => {
    const angle = 30;
    switch (props.theme) {
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
        if (props.theme?.fromHEX) {
          return {
            backgroundImage: `linear-gradient(${angle}deg, ${props.theme.fromHEX} 50%,${props.theme.toHEX} 50%)`,
            firstColor: props.theme.firstColor,
            secondColor: props.theme.secondColor,
            borderColor: props.theme.fromHEX,
          };
        }
        return {
          backgroundImage: `linear-gradient(${angle}deg,#fff 50%,#252525 50%)`,
          firstColor: "#252525",
          secondColor: "#fff",
          borderColor: "#fff",
        };
    }
  };
  // ----- STYLING -----
  const popupStyle: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    zIndex: "10",

    padding: "1.8rem",
    borderRadius: ".8rem",

    backgroundImage: handleColor().backgroundImage,
    border: `3px solid ${handleColor().firstColor}`,
    color: handleColor().firstColor,
    backgroundSize: "200vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0%",
    transform: "translate(-50%,-50%)",
    transition: "background 300ms ease-in-out, color 300ms ease-in-out",

    fontSize: "1.6rem",
    fontWeight: "400",
  };

  const topBarStyle: React.CSSProperties = {
    display: "flex",
    position: "relative",

    width: "100%",
    marginBottom: "25px",
  };
  const topBarTitleStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",

    width: "100%",
    paddingInline: "calc(1.8rem + 25px)",

    color: handleColor().firstColor,
    fontSize: "3rem",
    fontWeight: "800",
  };
  const closeButtonStyle: React.CSSProperties = {
    position: "absolute",

    backgroundColor: "transparent",
    borderBottom: "2px solid transparent",

    width: "25px",
    height: "25px",
  };

  const childrenStyle: React.CSSProperties = {
    display: "grid",
    gap: "1rem",
    justifyContent: "center",
  };

  const styles = StyleSheet.create({
    closeButton: {
      cursor: "pointer",
      ":before": {
        transform: "translate(-50%,-50%) rotate(-45deg)",
        position: "absolute",
        left: "50%",
        top: "50%",
        content: "''",
        width: "4px",
        height: "25px",
        borderRadius: "4px",
        backgroundColor: "black",
        transition: "500ms all cubic-bezier(0.51, 0.92, 0.24, 1.15)",
      },
      ":after": {
        transform: "translate(-50%,-50%) rotate(45deg)",
        position: "absolute",
        left: "50%",
        top: "50%",
        content: "''",
        width: "4px",
        height: "25px",
        borderRadius: "4px",
        backgroundColor: "black",
        transition: "500ms all cubic-bezier(0.51, 0.92, 0.24, 1.15)",
      },
      ":hover": {
        ":before": {
          transform: "translate(-50%, -50%) rotate(45deg)",
        },
        ":after": {
          transform: "translate(-50%, -50%) rotate(-45deg)",
        },
      },
    },
  });

  return (
    <aside style={popupStyle}>
      <div style={topBarStyle}>
        <button
          style={closeButtonStyle}
          className={css(styles.closeButton)}
        ></button>
        <h2 style={topBarTitleStyle}>{props.topBarTitle}</h2>
      </div>
      <div style={childrenStyle}>
        {props.children.map((child) => {
          return child;
        })}
      </div>
    </aside>
  );
}
