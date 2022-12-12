import "./TestPage.scss";
import React from "react";
import MeButton from "../components/MeButton";
import MeInput from "../components/MeInput";
import MeInputFile from "../components/MeInputFile";
import MeControl from "../components/MeControl";

export default function TestPage() {
  return (
    <div>
      <MeInput type="textarea" />
      <MeButton
        disabled
        onClick={() => console.log("hej")}
        transitionY
        text="my button"
        size="small"
        theme={"AmaranthPurple"}
      />
      <MeButton
        type="submit"
        transitionY
        text="my button"
        size="large"
        theme={"SpaceCadet"}
      />

      <MeInput
        placeholder="password"
        label="password"
        type={"password"}
        theme="AmaranthPurple"
      />
      <MeInput
        id="0111"
        regexValidation={"email"}
        placeholder="example@mail.com"
        type={"email"}
        label="email"
        theme={"SpaceCadet"}
      />

      <MeInputFile id="001" label="add your file" />
      <MeControl />
      {/* Fix input file ... checkbox ... radio ... slider */}
    </div>
  );
}
