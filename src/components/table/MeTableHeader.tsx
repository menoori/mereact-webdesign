import React, { ReactElement } from "react";

interface Props {
  children: string[];
}

export default function MeTableHeader({ children }: Props): ReactElement {
  return (
    <thead>
      <tr>
        {children.map((header, index) => {
          return <th key={`${header}-${index}`}>{header}</th>;
        })}
      </tr>
    </thead>
  );
}
