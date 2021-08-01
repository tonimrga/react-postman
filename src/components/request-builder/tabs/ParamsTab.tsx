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
      <div className="query-params-key">
        <input 
          type="text" 
          value={param[0]} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onKeyChange(e.target.value, index)} />
      </div>
      <div className="query-params-value">
        <input 
          type="text" 
          value={param[1]} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange(e.target.value, index)}
        />
      </div>
      <div className="query-params-remove">
        <button className="remove-query-params-button" onClick={() => onRemoveQueryParam(index)}>x</button>
      </div>
    </div>
  ));

  return (
    <div className="request-builder-params"> 
      <button className="add-query-params-button" onClick={onAddNewClick}>+ Add new</button>
      {renderQueryParams}
    </div>
  );
}