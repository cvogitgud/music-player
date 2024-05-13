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
  const [duration, setDuration] = useState(0);
  const [randomTrackIndex, setRandomTrackIndex] = useState(0);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const onEnded = () => {
    if (!repeatOn) {
      handleNext();
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // Toggles
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleShuffle = () => {
    setShuffleOn((prev) => !prev);
    let myNum = 0;
    while (myNum === trackIndex) {
      myNum = Math.floor(Math.random() * tracks.length + 1);
    }
    setRandomTrackIndex(myNum);
  };

  const toggleRepeat = () => {
    setRepeatOn((prev) => !prev);
  };

  // Play/Pause
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  // Skip next/prev
  const handleNext = () => {
    if (shuffleOn) {
      setTrackIndex(randomTrackIndex);
      setCurrentTrack(tracks[randomTrackIndex]);
    } else {
      if (trackIndex === tracks.length - 1) {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
      } else if (trackIndex >= 0 && trackIndex < tracks.length - 1) {
        setTrackIndex((prev) => prev + 1);
        setCurrentTrack(tracks[trackIndex + 1]); // trackIndex hasn't been updated yet
      }
    }
    setIsPlaying(true);
  };

  const handlePrev = () => {
    if (trackIndex === 0) {
      setTrackIndex(tracks.length - 1);
      setCurrentTrack(tracks[tracks.length - 1]);
    } else if (trackIndex > 0 && trackIndex <= tracks.length - 1) {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
    setIsPlaying(true);
  };

  return (
    <div className="player basis-1/3 flex justify-center gap-2">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}></audio>
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
