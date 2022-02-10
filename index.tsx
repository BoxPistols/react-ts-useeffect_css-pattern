import React from 'react';
import { render } from 'react-dom';
import StylingList from './StylingList';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return (
    <div>
      <StylingList name={name} />
      <p>Start editing to see some magic happen </p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
