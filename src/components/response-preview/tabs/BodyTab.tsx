import React from "react";

import "./BodyTab.css";

interface Props {
    body: any;
    method?: string;
    status?: number;
    statusText?: string;
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

  const renderStatusBar = () => {
    return (
      <div className="response-status-bar">
        Method: <span className="status-method">{props.method}</span> | 
        Status: {props.status} {props.statusText}
      </div>
    );
  };

  return (
    <div className="response-preview-body"> 
      <pre>
        {renderStatusBar()}
        {renderBody()}</pre>
    </div>
  );
}