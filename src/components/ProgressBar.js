import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material/';

const ProgressBar = ({ audioRef, isPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(audioRef.current.currentTime);
  const [duration, setDuration] = useState(audioRef.current.duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 1000);

    if (!isPlaying) {
      clearInterval(timer);
    }
  }, [audioRef.current.currentTime]);

  return (
    <div>
      <p>{currentTime}</p>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="mt-3 mb-3 w-96 flex justify-center flex-col"
      />
    </div>
  );
};

export default ProgressBar;
