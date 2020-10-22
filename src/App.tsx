import React from 'react';

import './styles/global.css';
import Header from './components/Header';
import Videos from './components/Videos';

function App() {
  return (
    <div className="father">
      <Header />
      <Videos />
    </div>
  );
}

export default App;
