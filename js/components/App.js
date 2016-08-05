// include React and React.Component which is what our components inherit from
import React, {Component} from 'react'
// go grab our dumb component (notice the relative path - we NEED that or else it looks in node_modules)
import Dummy from './DumbComponent'

class App extends Component {
  // instance method render
  render() {
    return(
      <div>
        Hello World!
        <Dummy></Dummy>
      </div>
    )
  }
}

// export this component to be used somewhere else (we could have done export default class App above as well)
export default App