import React from 'react';

import './ParamsTab.css';

interface Props {
  queryParams: string[][];
  onQueryParamsChange: (queryParams: string[][]) => void;
}

export const ParamsTab: React.FC<Props> = (props: Props) => {
  const onAddNewClick = () => {
    const queryParams = [ ...props.queryParams ];
    queryParams.push(["", ""]);
    props.onQueryParamsChange(queryParams);
  };

  const onKeyChange = (key: string, index: number) => {
    const queryParams = [ ...props.queryParams ];
    const updatedQueryParam = queryParams[index];
    updatedQueryParam[0] = key;
    queryParams[index] = updatedQueryParam;
    props.onQueryParamsChange(queryParams);
  };

  const onValueChange = (value: string, index: number) => {
    const queryParams = [ ...props.queryParams ];
    const updatedQueryParam = queryParams[index];
    updatedQueryParam[1] = value;
    queryParams[index] = updatedQueryParam;
    props.onQueryParamsChange(queryParams);
  };

  const onRemoveQueryParam = (index: number) => {
    const queryParams = [ ...props.queryParams ];
    queryParams.splice(index, 1);
    props.onQueryParamsChange(queryParams);
  };

  const renderQueryParams = props.queryParams.map((param, index) => (
    <div className="query-params-row" key={index}>
      <input 
        className="query-params-input"          
        type="text" 
        value={param[0]} 
        placeholder="Enter a key"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onKeyChange(e.target.value, index)} 
      />
      <input
        className="query-params-input"
        type="text" 
        value={param[1]} 
        placeholder="Enter a value"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value, index)}
      />
      <button className="query-params-remove-button" onClick={() => onRemoveQueryParam(index)}>x</button>
    </div>
  ));

  return (
    <div className="query-params"> 
      <button className="query-params-add-button" onClick={onAddNewClick}>+ Add</button>
      {renderQueryParams}
    </div>
  );
}