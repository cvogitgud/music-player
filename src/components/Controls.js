import { Button, Stack, LinearProgress, Divider } from '@mui/material/';
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

  // play control

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  // create function using useEffect to grab the
  // (current time of the song / duration) * 100
  let progress = 40;

  // add repeat and shuffle!

  return (
    <div className="player basis-1/3 flex justify-center gap-2 ">
      <audio src={currentTrack.src} ref={audioRef}></audio>

      <Stack className="w-96">
        <LinearProgress
          variant="determinate"
          value={progress}
          className="mt-3 mb-3 w-96 flex justify-center flex-col"
        />

        <div className="buttons flex justify-evenly">
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
