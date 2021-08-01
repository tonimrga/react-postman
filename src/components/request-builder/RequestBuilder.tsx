import React, { useState } from 'react';

import { BodyTab, HeadersTab, ParamsTab } from './tabs';

import './RequestBuilder.css';

enum RequestTab {
  BODY,
  QUERY_PARAMS,
  HEADERS,
}

interface Props {
  body: string;
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const RequestBuilder: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<RequestTab>(RequestTab.BODY);

  const renderRequestBuilder = () => {  
    switch (activeTab) {
      case RequestTab.BODY:
        return <BodyTab body={props.body} onBodyChange={props.onBodyChange} />;

      case RequestTab.QUERY_PARAMS:
        return <ParamsTab />;
      
      case RequestTab.HEADERS:
        return <HeadersTab />;
    }
  };
  
  return (
    <div className="request-builder">
      <div className="request-builder-title">
        <span>Request</span>
      </div>
      <div className="request-builder-tabs">
        <button className="request-builder-tabs__button" onClick={() => setActiveTab(RequestTab.BODY)}>Body</button>
        <button className="response-preview-tabs__button" onClick={() => setActiveTab(RequestTab.QUERY_PARAMS)}> Query params</button>
        <button className="response-preview-tabs__button" onClick={() => setActiveTab(RequestTab.HEADERS)}> Headers</button>
      </div>
      {renderRequestBuilder()}
    </div>
  );
}