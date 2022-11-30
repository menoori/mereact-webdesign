import "../../style/main.scss";
import React, { ReactElement } from "react";
import MeButton from "../MeButton";
import MeTableRow from "./MeTableRow";

interface Props {
  children: ReactElement[];
}

export default function MeTable({ children }: Props): ReactElement {
  return (
    <table>
      <h2>Senaste fakturor</h2>
      <tbody>{children}</tbody>
    </table>
  );
}
