import React, { useState } from 'react';
import { ResponseObject } from '../../interfaces';
import { BodyTab } from './BodyTab';
import { EmptyScreen } from './EmptyScreen';
import { HeadersTab } from './HeadersTab';

import './ResponsePreview.css';

enum ResponseTab {
  BODY,
  HEADERS,
}

interface Props {
  errorText?: string;
  response?: ResponseObject;
}

export const ResponsePreview: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<ResponseTab>(ResponseTab.BODY);

  const renderStatusBar = () => {
    if (!props.response) return null;

    return (
      <div className="response-status-bar">
        <span>Method: {props.response.method} | Status: {props.response.status} {props.response.statusText}</span>
      </div>
    );
  }

  const renderResponsePreview = () => {
    if (!props.response) return <EmptyScreen errorText={props.errorText} />;

    switch (activeTab) {
      case ResponseTab.BODY:
        return <BodyTab body={props.response.data} />
      
      case ResponseTab.HEADERS:
        return <HeadersTab headers={props.response.headers} />
    }
  };

  return (
    <div className="response-preview">
      <div className="response-preview-title">
        <span>Response</span>
      </div>
      <div className="response-preview-tabs">
        <button 
          className="response-preview-tabs__button"
          disabled={props.response === undefined}
          onClick={() => setActiveTab(ResponseTab.BODY)}
        >
            Body
        </button>
        <button 
          className="response-preview-tabs__button"
          disabled={props.response === undefined}
          onClick={() => setActiveTab(ResponseTab.HEADERS)}
        >
          Headers
        </button>
        {renderStatusBar()}
      </div>
      {renderResponsePreview()}
    </div>
  );
}