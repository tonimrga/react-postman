import React from 'react';

import { AppBody, AppHeader } from './components';

import './App.css';

export const App: React.FC = () => {
  return (
    <div className='app'>
        <AppHeader />
        <AppBody />
    </div>
  );
}