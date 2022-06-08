import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { globalCss } from './stitches.config';

const css = globalCss({
  'html': {
    backgroundColor: '$background',
    fontSize: '18px',
    '-webkit-tap-highlight-color':  'rgba(255, 255, 255, 0)'
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {css()}
    <App />
  </React.StrictMode>
);
