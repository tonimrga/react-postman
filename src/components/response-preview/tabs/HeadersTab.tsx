import React from 'react';
import { HeaderObject } from '../../../interfaces';

import './HeadersTab.css';

interface Props {
    headers: HeaderObject;
}

export const HeadersTab: React.FC<Props> = (props: Props) => {
  const renderHeaders = Object.keys(props.headers).map((key) => (
    <div className="response-header">
      <div className="response-header__key">{key}:</div>
      <div className="response-header__value">{props.headers[key]}</div>
    </div>
  ));
       
  return (
    <div className="response-preview-headers">
      {renderHeaders}
    </div>
  );
}