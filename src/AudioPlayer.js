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
  const [queue, setQueue] = useState([]);
  const audioRef = useRef(currentTrack); // maybe this shouldn't be set to currentTrack, wrong elem
  const controlsRef = useRef();

  // make sure all indices in the queue are UNIQUE
  tracks.forEach((track) => {
    let randomInt = 0;
    do {
      randomInt = Math.floor(Math.random() * 4);
    } while (queue.includes(randomInt));
    queue.push(randomInt);
  });

  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl mt-7 flex justify-center">
          Walrus Jams
        </div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Sidebar? Other pages?</div>
          <SongDetails currentTrack={currentTrack} audioRef={audioRef} />
          <TrackList tracks={tracks} queue={queue} />
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
            controlsRef={controlsRef}
          />
          <VolumeSlider audioRef={audioRef} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
