import './App.css';
import { useState } from 'react';

import SongDetails from './components/SongDetails';
import TrackList from './components/TrackList';
import Controls from './components/Controls';
import VolumeSlider from './components/VolumeSlider';

import inyourarms from './data/saib. - in your arms..mp3';

function App() {
  const [currentTrack, setCurrentTrack] = useState(inyourarms);

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
          <Controls />
          <div className="info mt-5 basis-1/3">
            <VolumeSlider />
          </div>
        </div>
        <audio src={inyourarms} controls></audio>
      </div>
    </div>
  );
}

export default App;
