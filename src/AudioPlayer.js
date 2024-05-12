import { useRef, useState } from 'react';

import SongDetails from './components/SongDetails.js';
import TrackList from './components/TrackList.js';
import Controls from './components/Controls.js';
import VolumeSlider from './components/VolumeSlider.js';

import { tracks } from './data/tracks.js';

function AudioPlayer() {
  // currently using own database of songs stored in tracks.js
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const audioRef = useRef(currentTrack);

  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl mt-7 flex justify-center">
          Walrus Jams
        </div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Sidebar? Other pages?</div>
          <SongDetails currentTrack={currentTrack} audioRef={audioRef} />
          <TrackList />
        </div>

        <div className="sections flex align-top">
          <div className="info mt-3 basis-1/3">Blank</div>
          <Controls
            tracks={tracks}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
            audioRef={audioRef}
          />
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
