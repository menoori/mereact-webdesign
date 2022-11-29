import "./TestPage.scss";
import React from "react";
import MeButton from "../components/MeButton";
import MeInput from "../components/MeInput";
import MeInputFile from "../components/MeInputFile";
import MePopup from "../components/MePopup";

export default function TestPage() {
  return (
    <div>
      <MePopup topBarTitle="Lägg till ny faktura">
        <MeButton
          type="submit"
          transitionY
          text="my button"
          size="large"
          theme={"SpaceCadet"}
          icon="+"
        />
        <MeInput
          placeholder="password"
          label="password"
          type={"password"}
          theme="AmaranthPurple"
        />
        <MeInput
          placeholder="password"
          label="password"
          type={"password"}
          theme="AmaranthPurple"
        />
      </MePopup>
      <MeButton
        disabled
        onClick={() => console.log("hej")}
        transitionY
        text="my button"
        size="small"
        theme={"AmaranthPurple"}
      />
      <MeButton
        transitionY
        text="my button"
        size="medium"
        theme={"InverseOuterSpaceCrayola"}
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
      <MeInput type={"date"} theme="InverseEnglishViolet" />
      <MeInput type={"datetime-local"} theme="InverseEnglishViolet" />
      <MeInput
        id="0111"
        regexValidation={"email"}
        placeholder="example@mail.com"
        type={"email"}
        label="email"
        theme={"SpaceCadet"}
      />
      <MeInput type={"number"} placeholder="number" theme={"AmaranthPurple"} />
      <MeInput type={"time"} theme={"AmaranthPurple"} />
      <MeInput
        id="2"
        noHoverAnimation
        regexValidation={"tel"}
        type={"tel"}
        label="Telephone"
        placeholder="07X XX XX XXX"
        theme={"AmaranthPurple"}
      />
      <MeInput
        regexValidation={"url"}
        label="url"
        placeholder="https://www.example.com"
        type={"url"}
        required
      />
      <MeInputFile id="001" label="add your file" />

      {/* Fix input file ... checkbox ... radio ... slider */}
    </div>
  );
}
