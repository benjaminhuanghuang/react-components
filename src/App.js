import React, { Component } from "react";

//
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="top">
        <button>top</button>
      </Tooltip>
    </div>
  );
}

export default App;
