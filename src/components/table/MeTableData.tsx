import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[] | ReactElement;
}

export default function MeTableData({ children }: Props): ReactElement {
  return <td>{children}</td>;
}
