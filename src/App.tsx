import React from 'react';

import './App.css';
import { AppBody, AppHeader } from './components';

export const App: React.FC = () => {
  return (
    <div className='app'>
        <AppHeader />
        <AppBody />
    </div>
  );
}