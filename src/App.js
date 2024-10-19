import React from 'react';
import FetchData from './components/FetchData';
import MouseTracker from './components/MouseTracker';
import UpdateTitle from './components/UpdateTitle';

function App() {
  return (
    <div className="App">
      <h1>useEffect Hook Examples</h1>
      <FetchData />
      <MouseTracker />
      <UpdateTitle />
    </div>
  );
}

export default App;
