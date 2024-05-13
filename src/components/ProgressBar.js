import { useEffect, useState } from 'react';
import { LinearProgress, Slider } from '@mui/material/';

const ProgressBar = ({ audioRef, isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  let timer = 0;
  useEffect(() => {
    timer = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }, 1000);
  }, [audioRef.current.currentTime]);

  if (!isPlaying) {
    clearInterval(timer);
  }

  const handleChange = (event, value) => {
    setCurrentTime((value / 100) * audioRef.current.duration);
    audioRef.current.currentTime = currentTime;
    clearInterval(timer);
    setProgress(value);
  };

  return (
    <div>
      {/* <LinearProgress
        variant="determinate"
        value={progress}
        className="mt-3 mb-3 w-96 flex justify-center flex-col"
      /> */}
      <Slider
        size="small"
        value={progress}
        onChange={handleChange}
        className="w-96 flex justify-center flex-col"
      />
      <div className="time-display flex justify-between">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(audioRef.current.duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
