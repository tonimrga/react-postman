import React, { useState } from 'react';
import { BodyTab } from './BodyTab';

import './RequestBuilder.css';

enum RequestTab {
  BODY,
  QUERY_PARAMS,
  HEADERS,
}

export const RequestBuilder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RequestTab>(RequestTab.BODY);

  const renderRequestBuilder = () => {  
    switch (activeTab) {
      case RequestTab.BODY:
        return <BodyTab />

      case RequestTab.QUERY_PARAMS:
        return <div>PARAMS</div>
      
      case RequestTab.HEADERS:
        return <div>headers</div>
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