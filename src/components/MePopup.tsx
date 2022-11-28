import React from "react";

export default function MePopup() {
  // ----- STYLING -----

  const popupStyle: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
  };
  return <aside style={popupStyle}>this is a popup</aside>;
}
