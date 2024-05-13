import { Slider, Stack } from '@mui/material/';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeSlider = ({ audioRef }) => {
  const handleChange = (event, value) => {
    audioRef.current.volume = value / 100;
  };

  return (
    <div className="info basis-1/3 flex justify-center relative size-7">
      <Stack spacing={2} direction="row" alignItems="center" className="w-80">
        <VolumeDown />
        <Slider onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </div>
  );
};

export default VolumeSlider;
