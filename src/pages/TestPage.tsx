import React from "react";
import Me_Button from "../components/Me_Button";
import Me_Input from "../components/Me_Input";
import Me_InputFile from "../components/Me_InputFile";

export default function TestPage() {
  return (
    <>
      <Me_Input />
      <Me_Button>Hej</Me_Button>
      <Me_InputFile label="Input file here" />
    </>
  );
}
