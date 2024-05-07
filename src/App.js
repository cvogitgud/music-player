import './App.css';

import SongDetails from './components/SongDetails';
import TrackList from './components/TrackList';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl mt-10">Walrus Music</div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Sidebar? Other pages?</div>
          <SongDetails />
          <TrackList />
        </div>

        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
