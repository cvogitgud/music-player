import thegardenofwords from './img/thegardenofwords.jpg';
import './App.css';
import { Button, Slider, Stack } from '@mui/material/';

import {
  VolumeDown,
  VolumeUp,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="title text-6xl mt-10">Walrus Music</div>
        <div className="sections flex">
          <div className="info mt-5 basis-1/3">Sidebar? Other pages?</div>
          <div className="SongDetails flex justify-center mt-7 basis-1/3 align-top">
            <div>
              <img
                src={thegardenofwords}
                alt="garden of words"
                className="track-art size-96 object-cover"
              />

              <p className="track-author-title m-3 ml-0 flex justify-start">
                saib. - in your arms
              </p>
            </div>
          </div>
          <div className="queue basis-1/3 mt-5">Current queue</div>
        </div>

        <div className="tools ">
          <div className="slider-ui">
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center">
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
      </div>
    </div>
  );
}

export default App;
