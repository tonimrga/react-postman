import React, { useState } from 'react';
import axios from 'axios';

import { RequestBuilder, ResponsePreview, UrlForm } from './components';
import { ResponseObject } from './interfaces';
import { buildResponseObject, handleAxiosError } from './utils';

import './App.css';

export const App: React.FC = () => {
  const [reqBody, setReqBody] = useState<string>("{}");
  const [reqHeaders, setReqHeaders] = useState<string[][]>([]);
  const [reqQueryParams, setReqQueryParams] = useState<string[][]>([]);
  const [errorText, setErrorText] = useState<string | undefined>();
  const [responseObject, setResponseObject] = useState<ResponseObject | undefined>();
  
  const onReqBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReqBody(e.target.value);
  };

  const onReqHeadersChange = (reqHeaders: string[][]) => {
    setReqHeaders(reqHeaders);
  };

  const onQueryParamsChange = (reqQueryParams: string[][]) => {
    setReqQueryParams(reqQueryParams);
  };

  const onSendRequest = async (url: string, method: string) => {
    try {
      const response = await axios({ method: 'get', url: url });
      const responseObject = buildResponseObject(response);
      setErrorText(undefined);
      setResponseObject(responseObject);
    } catch(e) {
      const errorObject = handleAxiosError(e);
      if (!errorObject) setErrorText('Error: Could not send request.');
      setResponseObject(errorObject);
    }
  };

  return (
    <div className='app'>
      <div className='app-header'>
        <h1 className='app-header__title'>Postman Clone</h1>
      </div>
      <div className='app-body'>
        <UrlForm onSendRequest={onSendRequest} />
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