import React, { useEffect, useState } from "react";

import { ResponseObject } from "../../interfaces";
import { EmptyScreen } from "./EmptyScreen";
import { BodyTab, HeadersTab } from "./tabs";

import "./ResponsePreview.css";

enum ResponseTab {
  BODY,
  HEADERS,
}

interface Props {
  errorText?: string;
  response?: ResponseObject;
}

export const ResponsePreview: React.FC<Props> = (props: Props) => {
  const [activeTab, setActiveTab] = useState<ResponseTab | null>(null);

  useEffect(() => {
    if (!props.response) {
      setActiveTab(null);
    } else {
      setActiveTab(ResponseTab.BODY);
    }
  }, [props.response]);

  const renderResponsePreview = () => {
    if (!props.response) return <EmptyScreen errorText={props.errorText} />;

    switch (activeTab) {
      case ResponseTab.BODY:
        return (
          <BodyTab 
            body={props.response.data} 
            method={props.response.method} 
            status={props.response.status} 
            statusText={props.response.statusText}
          />
        );
      
      case ResponseTab.HEADERS:
        return <HeadersTab headers={props.response.headers} />
    }
  };

  const buttonClass = "response-preview-tabs__button";
  const buttonClassActive = "response-preview-tabs__button--active"
  return (
    <div className="response-preview">
      <div className="response-preview-title">
        <span>Response preview</span>
      </div>
      <div className="response-preview-tabs">
        <button 
          className={activeTab === ResponseTab.BODY ? buttonClassActive : buttonClass}
          disabled={props.response === undefined}
          onClick={() => setActiveTab(ResponseTab.BODY)}
        >
            Body
        </button>
        <button 
          className={activeTab === ResponseTab.HEADERS ? buttonClassActive : buttonClass}
          disabled={props.response === undefined}
          onClick={() => setActiveTab(ResponseTab.HEADERS)}
        >
          Headers
        </button>
      </div>
      {renderResponsePreview()}
    </div>
  );
}