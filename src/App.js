import thegardenofwords from './img/thegardenofwords.jpg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <div className="title text-6xl mt-10">Walrus Music</div>
      <div className="SongDetails flex justify-center">
        <img
          src={thegardenofwords}
          alt="garden of words"
          className="song-cover size-96 object-cover"
        />
      </div>
      <div className="SongInteract">
        <Button className="play-button">Play</Button>
        <Button className="pause-button">Pause</Button>
      </div>
    </div>
  );
}

export default App;
