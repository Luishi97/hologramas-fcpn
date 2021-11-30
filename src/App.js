import { Router } from '@reach/router'

import VideoList from './VideoList'
import VideoUp from './VideoUp/VideoUp'
import './Shared/sass/main.sass'

function App() {
  return (
    <Router className="App">
      <VideoUp path="/up" />
      <VideoList path="/down" />
      <VideoList path="/" />
    </Router>
  )
}

export default App
