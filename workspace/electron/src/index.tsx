import { App } from '@workspace/app/src/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
