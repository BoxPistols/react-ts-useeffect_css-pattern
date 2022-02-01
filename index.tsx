import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return (
    <div>
      <Hello name={name} />
      <p>Start editing to see some magic happen </p>
    </div>
  );
};

render(<App />, document.getElementById('root'));
