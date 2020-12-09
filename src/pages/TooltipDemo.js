import React from 'react'
//
import Tooltip from "./components/Tooltip";


function TooltipDemo() {
  return (
    <div className="App">
    <Tooltip position="top" content="top">
      <button>top</button>
    </Tooltip>
  </div>
  )
}

export default TooltipDemo
