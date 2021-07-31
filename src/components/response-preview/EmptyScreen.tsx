import React from 'react';

import './EmptyScreen.css';

interface Props {
    errorText?: string;
}

export const EmptyScreen: React.FC<Props> = (props: Props) => {
  return (
    <div className="response-preview-empty">
      <span className="response-preview-empty-text">
        {props.errorText ? props.errorText : 'Enter the URL and click send to get a response.'}
      </span>
    </div>
  );
}