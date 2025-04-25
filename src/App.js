import React, { useState, Suspense } from 'react'
import './App.css';

const Home = React.lazy(() => import("./componentes/Home.js"))
const VideoOptions = React.lazy(() => import("./componentes/VideoOptions.js"))

function App() {
  const [videoData, setVideoData] = useState(null)
  return (
    <div className="App">
      <Suspense fallback={<div>Carregando...</div>}>
        <Home setVideoData={setVideoData} />
        <VideoOptions videoData={videoData} />
      </Suspense>
    </div>
  );
}

export default App;
