import React from "react";
import Me_Button from "../components/Me_Button";
import Me_Input from "../components/Me_Input";
import Me_InputFile from "../components/Me_InputFile";

export default function TestPage() {
  /*
  MEINPUT
 Password needs to be able to clear when pressing at the red x
 Make a clear button?
 Options to only allow certain type of inputs
 when chosing type, e.g. number only allow number inputs
 Textbox needs to be able to increase in size and whitespace
*/
  /*
  MEBUTTON
 Outline buttonStyle ruins theme
 Flat buttonStyle ruins theme
 */

  /*
  MEINPUTFILE

  Icon is off center when no label text
 */
  return (
    <>
      <Me_Input label="kaos" />
      <Me_InputFile label="Input me" />
    </>
  );
}
