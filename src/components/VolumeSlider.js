import { Slider, Stack } from '@mui/material/';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeSlider = () => {
  return (
    <div className="info basis-1/3 flex justify-center relative size-7">
      <Stack spacing={2} direction="row" alignItems="center" className="w-80">
        <VolumeDown />
        <Slider aria-label="Volume" />
        <VolumeUp />
      </Stack>
    </div>
  );
};

export default VolumeSlider;
