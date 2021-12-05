import React from "react";

import "./HeadersTab.css";

interface Props {
  headers: string[][];
  onHeadersChange: (headers: string[][]) => void;
}

export const HeadersTab: React.FC<Props> = (props: Props) => {
  const onAddNewClick = () => {
    const headers = [ ...props.headers ];
    headers.push(["", ""]);
    props.onHeadersChange(headers);
  };

  const onKeyChange = (key: string, index: number) => {
    const headers = [ ...props.headers ];
    const updatedHeader = headers[index];
    updatedHeader[0] = key;
    headers[index] = updatedHeader;
    props.onHeadersChange(headers);
  };

  const onValueChange = (value: string, index: number) => {
    const headers = [ ...props.headers ];
    const updatedHeader = headers[index];
    updatedHeader[1] = value;
    headers[index] = updatedHeader;
    props.onHeadersChange(headers);
  };

  const onRemoveHeader = (index: number) => {
    const headers = [ ...props.headers ];
    headers.splice(index, 1);
    props.onHeadersChange(headers);
  };

  const renderQueryParams = props.headers.map((header, index) => (
    <div className="request-headers-row" key={index}>
      <input
        className="request-headers-key"
        type="text" 
        value={header[0]} 
        placeholder="Enter a key"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onKeyChange(e.target.value, index)} 
      />
      <input 
        className="request-headers-value"
        type="text" 
        value={header[1]}
        placeholder="Enter a value"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value, index)}
      />
      <button className="request-headers-remove-button" onClick={() => onRemoveHeader(index)}>x</button>
    </div>
  ));

  return (
    <div className="request-headers"> 
      <button className="request-headers-add-button" onClick={onAddNewClick}>+ Add new</button>
      {renderQueryParams}
    </div>
  );
}