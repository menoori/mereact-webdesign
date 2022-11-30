import React, { ReactElement } from "react";
import MeTableData from "./MeTableData";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function MeTableRow({ children }: Props): ReactElement {
  return <tr>{children}</tr>;
}
