import { Button, Slider, Stack } from '@mui/material/';
import {
  VolumeDown,
  VolumeUp,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';

const AudioPlayer = () => {
  return (
    <div className="player ">
      <div className="slider-ui">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" />
          <VolumeUp />
        </Stack>
        <div>
          <Button>
            <SkipPrevious />
          </Button>
          <Button className="play-button">Play</Button>
          <Button className="pause-button">Pause</Button>
          <Button>
            <SkipNext />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
