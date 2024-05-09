import { Slider, Stack } from '@mui/material/';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeSlider = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ mb: 1 }}
      alignItems="center"
      className="w-80">
      <VolumeDown />
      <Slider aria-label="Volume" />
      <VolumeUp />
    </Stack>
  );
};

export default VolumeSlider;
