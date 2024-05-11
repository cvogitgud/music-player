import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material/';

const ProgressBar = ({ audioRef, isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
        <p>{currentTime ? currentTime : '-:-'}</p>
        <p>{audioRef.current.duration ? audioRef.current.duration : '-:-'}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
