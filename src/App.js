import { Router } from '@reach/router'

import VideoList from './VideoList'
import './Shared/sass/main.sass'
import VideoUp from './VideoUp/VideoUp'

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
