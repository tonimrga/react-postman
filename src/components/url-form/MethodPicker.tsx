import React from "react";

import "./MethodPicker.css";

interface Props {
  method: string;
  onMethodChange: (e: React.FormEvent<HTMLSelectElement>) => void;
};

export const MethodPicker: React.FC<Props> = (props: Props) => {
  return (
    <div className="method-picker-wrapper">
      <select className="method-picker-select" value={props.method} onChange={props.onMethodChange}>
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="patch">PATCH</option>
        <option value="put">PUT</option>
        <option value="delete">DELETE</option>
      </select>
    </div>
  );
}