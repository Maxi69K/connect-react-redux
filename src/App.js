import React from 'react';
import './App.css';
import Accounts from './components/Accounts'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Accounts />
      </div>
    </Provider>
  );
}

export default App;
