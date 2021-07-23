import axios from 'axios';
import React from 'react';

import { RequestBuilder, ResponsePreview, UrlForm } from '../';
import './AppBody.css';

export const AppBody: React.FC = () => {
  const onSendRequest = async (url: string, method: string) => {
    const response = await axios({
      method: 'get',
      url: url,
    });
    console.log(response);
  };

  return (
    <div className='app-body'>
        <UrlForm onSendRequest={onSendRequest} />
        <div className='app-body__request'>
            <RequestBuilder />
            <ResponsePreview />
        </div>
    </div>
  );
}