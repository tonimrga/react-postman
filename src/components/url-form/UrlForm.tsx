import React, { useState } from 'react';

import { MethodPicker } from './MethodPicker';
import './UrlForm.css';

interface Props {
  onSendRequest: (url: string, method: string) => void;
}

export const UrlForm: React.FC<Props> = (props: Props) => {
  const [method, setMethod] = useState<string>('GET');
  const [url, setUrl] = useState<string>('');

  const onUrlChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const onSendRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSendRequest(url, method);
  };

  return (
    <form className='url-form' onSubmit={onSendRequest}>
        <MethodPicker />
        <input
          className="url-form__input"
          type='text'
          value={url}
          onChange={onUrlChange}
        />
        <input
          className="url-form__submit"
          type='submit'
          value='Send'
        />
    </form>
  );
}