import { useEffect, useState, useCallback, useRef } from 'react';
import { LinearProgress, Slider } from '@mui/material/';

const ProgressBar = ({ audioRef }) => {
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

  const handleChange = (event, value) => {
    clearInterval(timer);
    setCurrentTime((value / 100) * audioRef.current.duration);
    audioRef.current.currentTime = currentTime;
    setProgress(value);
  };

  return (
    <div>
      <Slider
        size="small"
        value={progress || 0}
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
