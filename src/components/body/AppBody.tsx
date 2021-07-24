import axios from 'axios';
import React, { useState } from 'react';

import { RequestBuilder, ResponsePreview, UrlForm } from '../';
import { ResponseObject } from '../../interfaces';
import { handleAxiosError } from '../../utils';
import './AppBody.css';

export const AppBody: React.FC = () => {
  const [errorText, setErrorText] = useState<string | undefined>();
  const [responseObject, setResponseObject] = useState<ResponseObject | undefined>();

  const onSendRequest = async (url: string, method: string) => {
    try {
      const response = await axios({ method: 'get', url: url });
      const responseObject = {
        data: response.data,
        headers: response.headers,
        method: response.config.method,
        status: response.status,
        statusText: response.statusText,
      }
      setErrorText(undefined);
      setResponseObject(responseObject);
    } catch(e) {
      const errorObject = handleAxiosError(e);
      if (!errorObject) setErrorText('Error: Could not send request.');
      setResponseObject(errorObject);
    }
  };

  return (
    <div className='app-body'>
        <UrlForm onSendRequest={onSendRequest} />
        <div className='app-body__request'>
            <RequestBuilder />
            <ResponsePreview errorText={errorText} response={responseObject} />
        </div>
    </div>
  );
}