import Home from './componentes/Home.js'
import VideoOptions from './componentes/VideoOptions.js';
import { useState } from 'react'
import './App.css';

function App() {
  const [videoData, setVideoData] = useState(null)
  return (
    <div className="App">
      <Home setVideoData={setVideoData} />
      <VideoOptions videoData={videoData} />
    </div>
  );
}

export default App;
