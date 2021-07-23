import React from 'react';

import { RequestBuilder, ResponsePreview, UrlForm } from '../';
import './AppBody.css';

export const AppBody: React.FC = () => {
  return (
    <div className='app-body'>
        <UrlForm />
        <div className='app-body__request'>
            <RequestBuilder />
            <ResponsePreview />
        </div>
    </div>
  );
}