import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material/';

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

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }, 1000);
  }, [audioRef.current.currentTime]);

  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="mt-3 mb-3 w-96 flex justify-center flex-col"
      />
      <div className="time-display flex justify-between">
        <p>{formatTime(currentTime)}</p>
        <p>{formatTime(audioRef.current.duration)}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
