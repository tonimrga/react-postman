import React, { useState } from 'react';
import axios, { Method } from 'axios';

import { RequestBuilder, ResponsePreview, UrlForm } from './components';
import { ResponseObject } from './interfaces';
import { buildResponseObject, handleAxiosError, prepareRequestBody, prepareRequestHeaders } from './utils';

import './App.css';

export const App: React.FC = () => {
  const [isRequestPending, setIsRequestPending] = useState<boolean>(false);
  const [reqBody, setReqBody] = useState<string>("");
  const [reqHeaders, setReqHeaders] = useState<string[][]>([["Content-type", "application/json; charset=UTF-8"]]);
  const [reqQueryParams, setReqQueryParams] = useState<string[][]>([["", ""]]);
  const [errorText, setErrorText] = useState<string>();
  const [responseObject, setResponseObject] = useState<ResponseObject>();
  
  const onReqBodyChange = (value: string) => {
    setReqBody(value);
  };

  const onReqHeadersChange = (reqHeaders: string[][]) => {
    setReqHeaders(reqHeaders);
  };

  const onQueryParamsChange = (reqQueryParams: string[][]) => {
    setReqQueryParams(reqQueryParams);
  };

  const onSendRequest = async (reqUrl: string, reqMethod: string) => {
    setIsRequestPending(true);
    try {
      const response = await axios({ 
        data: prepareRequestBody(reqBody),
        headers: prepareRequestHeaders(reqHeaders),
        method: reqMethod as Method, 
        params: new URLSearchParams(reqQueryParams), 
        url: reqUrl,
      });      
      const responseObject = buildResponseObject(response);
      setErrorText(undefined);
      setResponseObject(responseObject);
    } catch(e) {
      const errorObject = handleAxiosError(e);
      if (!errorObject) setErrorText('Error: Could not send request.');
      setResponseObject(errorObject);
    } finally {
      setIsRequestPending(false);
    }
  };

  return (
    <div className='app'>
      <div className='app-header'>
        <span className='app-header__title'>API Request Builder</span>
      </div>
      <div className='app-body'>
        <UrlForm isRequestPending={isRequestPending} onSendRequest={onSendRequest} />
        <div className='app-body__request'>
            <RequestBuilder 
              body={reqBody}
              headers={reqHeaders}
              queryParams={reqQueryParams}
              onQueryParamsChange={onQueryParamsChange}
              onHeadersChange={onReqHeadersChange}
              onBodyChange={onReqBodyChange} 
            />
            <ResponsePreview 
              errorText={errorText} 
              response={responseObject} 
            />
        </div>
      </div>
    </div>
  );
}