import React from 'react';
import { ResponseObject } from '../../interfaces';

import './ResponsePreview.css';

interface Props {
  errorText?: string;
  response?: ResponseObject;
}

export const ResponsePreview: React.FC<Props> = (props: Props) => {
  const renderEmptyPreview = (
    <div className="response-preview-empty">
      {props.errorText ? props.errorText : 'Enter the URL and click send to get a response.'}
    </div>
  );

  return props.response ? (
    <div className='response-preview'>
      data: {props.response.data.toString()}
      headers: {props.response.headers.toString()}
      method: {props.response.method}
      status: {props.response.status}
      status text: {props.response.statusText}
    </div>
  ) : renderEmptyPreview;
}