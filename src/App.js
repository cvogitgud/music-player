import { useRef, useState } from 'react';

import MainPage from './components/MainPage.js';

import Header from './components/Header.js';
import TaperedBorder from './components/TaperedBorder.js';
import Player from './components/Player.js';

import { tracks } from './data/tracks.js';

function App() {
  // currently using own database of songs stored in tracks.js
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [nextTrackIndex, setNextTrackIndex] = useState(1);
  const audioRef = useRef(currentTrack); // maybe this shouldn't be set to currentTrack, wrong elem

  return (
    <div className="App">
      <Header />
      <TaperedBorder />
      <MainPage
        currentTrack={currentTrack}
        audioRef={audioRef}
        tracks={tracks}
      />
      <Player
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        setCurrentTrack={setCurrentTrack}
        currentTrack={currentTrack}
        audioRef={audioRef}
        nextTrackIndex={nextTrackIndex}
      />
    </div>
  );
}

export default App;
