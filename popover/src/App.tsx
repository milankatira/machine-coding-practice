import React from 'react'
import Popover from './components/popover'

const App = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <Popover trigger={<button>🔽 Open Popover</button>}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Logout</li>
        </ul>
      </Popover>
    </div>
  )
}

export default App