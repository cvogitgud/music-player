import { useRef, useState } from 'react';

import SongDetails from './components/SongDetails.js';
import TrackList from './components/TrackList.js';
import Controls from './components/Controls.js';
import VolumeSlider from './components/VolumeSlider.js';

import { tracks } from './data/tracks.js';
import walrus_viking from './data/img/walrus viking.jpeg';

function AudioPlayer() {
  // currently using own database of songs stored in tracks.js
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [queue, setQueue] = useState([]);
  const audioRef = useRef(currentTrack); // maybe this shouldn't be set to currentTrack, wrong elem
  const controlsRef = useRef();

  // shuffle logic
  // make sure all indices in the queue are UNIQUE
  // tracks.forEach((track) => {
  //   let randomInt = 0;
  //   do {
  //     randomInt = Math.floor(Math.random() * 4);
  //   } while (queue.includes(randomInt));
  //   // randomInt = Math.floor(Math.random() * 4);
  //   queue.push(randomInt);
  // });

  const [nextTrackIndex, setNextTrackIndex] = useState(queue[0]);

  const handleSpacePress = (e) => {};

  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl pt-7 pb-4 flex justify-center bg-slate-500/40">
          <p>Walrus Jams</p>
        </div>
        <div className="flex justify-center opacity-50">
          <div className="h-px bg-gradient-to-l from-slate-50 w-1/2 "></div>
          <div className="h-px bg-gradient-to-r from-slate-50 w-1/2 "></div>
        </div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3 flex flex-col items-center justify-center">
            <img
              src={walrus_viking}
              alt="walrus viking"
              className="rounded-full size-1/2 ml-5"
            />
            <p>sidebar? other links? spotify options? about me? du ma</p>
          </div>
          <SongDetails currentTrack={currentTrack} audioRef={audioRef} />
          <TrackList tracks={tracks} queue={queue} />
        </div>
        <div className="sections flex align-top">
          <div id="filler" className="mt-3 basis-1/3"></div>
          <Controls
            tracks={tracks}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
            nextTrackIndex={nextTrackIndex}
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
