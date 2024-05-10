import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material/';

const ProgressBar = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(audioRef.current.duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    }, 1000);

    // if (!isPlaying) {
    //   clearInterval(timer);
    // }
  }, [audioRef.current.currentTime]);

  return (
    <div>
      <p>{currentTime ? currentTime : 0}</p>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="mt-3 mb-3 w-96 flex justify-center flex-col"
      />
    </div>
  );
};

export default ProgressBar;
