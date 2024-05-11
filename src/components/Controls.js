import { Button, Stack } from '@mui/material/';
import {
  SkipNext,
  SkipPrevious,
  PlayArrow,
  Pause,
  Shuffle,
  ShuffleOn,
  Repeat,
  RepeatOn,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Controls = ({ currentTrack, audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleShuffle = () => {
    setShuffleOn((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeatOn((prev) => !prev);
  };

  // Play/Pause control
  // notes for myself:
  // we are using useEffect to WATCH for changes to isPlaying and to create an EFFECT based off the value (play or pause)
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  // add repeat and shuffle!

  return (
    <div className="player basis-1/3 flex justify-center gap-2">
      <audio src={currentTrack.src} ref={audioRef}></audio>

      <Stack className="w-96">
        <ProgressBar audioRef={audioRef} isPlaying={isPlaying} />

        <div className="buttons flex justify-between mt-3">
          <Button className="shuffle-button" onClick={toggleShuffle}>
            {shuffleOn ? <ShuffleOn /> : <Shuffle />}
          </Button>
          <Button>
            <SkipPrevious />
          </Button>
          <Button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </Button>
          <Button>
            <SkipNext />
          </Button>
          <Button className="repeat-button" onClick={toggleRepeat}>
            {repeatOn ? <RepeatOn /> : <Repeat />}
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default Controls;
