import React from 'react';

import './HeadersTab.css';

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
    <div className="headers-row" key={index}>
      <div className="headers-key">
        <input 
          type="text" 
          value={header[0]} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onKeyChange(e.target.value, index)} />
      </div>
      <div className="headers-value">
        <input 
          type="text" 
          value={header[1]} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value, index)}
        />
      </div>
      <div className="headers-remove">
        <button className="remove-headers-button" onClick={() => onRemoveHeader(index)}>x</button>
      </div>
    </div>
  ));

  return (
    <div className="request-builder-headers"> 
      <button className="add-headers-button" onClick={onAddNewClick}>+ Add new</button>
      {renderQueryParams}
    </div>
  );
}