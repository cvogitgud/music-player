import { Button, Slider, Stack } from '@mui/material/';
import { SkipNext, SkipPrevious } from '@mui/icons-material';

const AudioPlayer = () => {
  return (
    <div className="player basis-1/3 mt-5 flex justify-center gap-2 ">
      <Stack className="w-96">
        <Slider aria-label="Progress" />

        <div className="buttons">
          <Button>
            <SkipPrevious />
          </Button>
          <Button className="play-button">Play</Button>
          <Button className="pause-button">Pause</Button>
          <Button>
            <SkipNext />
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default AudioPlayer;
