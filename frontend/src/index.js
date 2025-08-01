import ReactDOM from 'react-dom/client';

import './assets/stylesheets/application.scss';
import reportWebVitals from './reportWebVitals';
import app from './application.tsx';

const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('main'));
  const dom = await app();
  root.render(dom);

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};

run();
