import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material/';

const ProgressBar = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     setProgress(
  //       (audioRef.current.currentTime / audioRef.current.duration) * 100
  //     );
  //   }, []);

  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={progress}
        className="mt-3 mb-3 w-96 flex justify-center flex-col"
      />
    </div>
  );
};

export default ProgressBar;
