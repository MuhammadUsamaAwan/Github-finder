import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import Input from './components/input.component';
import Result from './components/result.component';

function App() {
  return (
    <Provider>
      <Input />
    <div className="container">
      <Result />
    </div>
    </Provider>
  );
}

export default App;
