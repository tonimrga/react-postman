import React, { useState } from "react";

import { BodyTab, HeadersTab, ParamsTab } from "./tabs";

import "./RequestBuilder.css";

enum RequestTab {
  BODY,
  QUERY_PARAMS,
  HEADERS,
}

interface Props {
  body: string;
  headers: string[][];
  queryParams: string[][];
  onBodyChange: (value: string) => void;
  onHeadersChange: (headers: string[][]) => void;
  onQueryParamsChange: (queryParams: string[][]) => void;
}

export const RequestBuilder: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<RequestTab>(RequestTab.BODY);

  const renderRequestBuilder = () => {  
    switch (activeTab) {
      case RequestTab.BODY:
        return <BodyTab body={props.body} onBodyChange={props.onBodyChange} />;

      case RequestTab.QUERY_PARAMS:
        return <ParamsTab queryParams={props.queryParams} onQueryParamsChange={props.onQueryParamsChange} />;
      
      case RequestTab.HEADERS:
        return <HeadersTab headers={props.headers} onHeadersChange={props.onHeadersChange} />;
    }
  };

  const buttonClass = "request-builder-tabs__button";
  const buttonClassActive = "request-builder-tabs__button--active"
  return (
    <div className="request-builder">
      <div className="request-builder-tabs">
        <button 
          className={activeTab === RequestTab.BODY ? buttonClassActive : buttonClass} 
          onClick={() => setActiveTab(RequestTab.BODY)}
        > 
          Request Body
        </button>
        <button 
          className={activeTab === RequestTab.QUERY_PARAMS ? buttonClassActive : buttonClass} 
          onClick={() => setActiveTab(RequestTab.QUERY_PARAMS)}
        >
          Query params
        </button>
        <button 
          className={activeTab === RequestTab.HEADERS ? buttonClassActive : buttonClass} 
          onClick={() => setActiveTab(RequestTab.HEADERS)}
        >
          Request Headers
        </button>
      </div>
      {renderRequestBuilder()}
    </div>
  );
}