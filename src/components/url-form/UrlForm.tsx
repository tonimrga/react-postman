import React from 'react';

import { MethodPicker } from './MethodPicker';
import './UrlForm.css';

export const UrlForm: React.FC = () => {
  return (
    <form className='url-form'>
        <MethodPicker />
        <input className="url-form__input" type='text' />
        <input className="url-form__submit" type='submit' value='Send' />
    </form>
  );
}