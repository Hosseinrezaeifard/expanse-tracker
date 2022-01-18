import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css'
import { Provider } from './context/context';

ReactDOM.render(
  // Step 2 of Context API
  <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_APP_ID} language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  ,
  document.getElementById('root')
);
