import { Slider, Stack } from '@mui/material/';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeSlider = ({ audioRef }) => {
  const handleChange = (event, value) => {
    audioRef.current.volume = value / 100;
  };

  return (
    <div className="info basis-1/3 flex justify-start relative ">
      <Stack spacing={2} direction="row" alignItems="top" className="w-96">
        <VolumeDown />
        <Slider onChange={handleChange} defaultValue={100} />
        <VolumeUp />
      </Stack>
    </div>
  );
};

export default VolumeSlider;
