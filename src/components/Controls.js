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

const Controls = ({
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  currentTrack,
  audioRef,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleShuffle = () => {
    setShuffleOn((prev) => !prev);
    // add in the actual shuffle logic
    // random, exclude the one we just played? must keep track
  };

  const toggleRepeat = () => {
    setRepeatOn((prev) => !prev);
    // add in actual repeat logic
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

  console.log(tracks.length);

  // Skip next/prev (don't forget the range/bounds)
  const handleNext = () => {
    if (trackIndex >= 0 && trackIndex < tracks.length - 1) {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]); // trackIndex hasn't been updated yet
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (trackIndex > 0 && trackIndex <= tracks.length) {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
      setIsPlaying(false);
    }
  };

  // add repeat and shuffle!

  return (
    <div className="player basis-1/3 flex justify-center gap-2">
      <Stack className="w-96">
        <ProgressBar audioRef={audioRef} isPlaying={isPlaying} />

        <div className="buttons flex justify-between mt-3">
          <Button className="shuffle-button" onClick={toggleShuffle}>
            {shuffleOn ? <ShuffleOn /> : <Shuffle />}
          </Button>
          <Button onClick={handlePrev}>
            <SkipPrevious />
          </Button>
          <Button className="play-button" onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </Button>
          <Button onClick={handleNext}>
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
