import React from 'react';

import './BodyTab.css';

interface Props {
    body: any;
}

export const BodyTab: React.FC<Props> = (props: Props) => {
  const renderBody = () => {
    let body: string;
    try {
      body = JSON.stringify(props.body, undefined, 2);
    } catch(e) {
      body = '';
    }
    return body;
  };

  return (
    <div className="response-preview-body"> 
      <pre>
        {renderBody()}
      </pre>
    </div>
  );
}