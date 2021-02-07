import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemProvider from './context/itemsContext';

function Main() {
  return(
    <ItemProvider>
      <App />
    </ItemProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
