import './App.css';

import SongDetails from './components/SongDetails';
import TrackList from './components/TrackList';
import AudioPlayer from './components/AudioPlayer';
import VolumeSlider from './components/VolumeSlider';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl mt-7">Walrus Jams</div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Sidebar? Other pages?</div>
          <SongDetails />
          <TrackList />
        </div>

        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Blank</div>
          <AudioPlayer />
          <div className="info mt-5 basis-1/3">
            <VolumeSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
