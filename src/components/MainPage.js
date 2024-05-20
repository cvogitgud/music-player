import About from './About.js';
import SongDetails from './SongDetails.js';
import TrackList from './TrackList.js';

const MainPage = ({ currentTrack, audioRef, tracks }) => {
  return (
    <div className="sections flex">
      <About />
      <SongDetails currentTrack={currentTrack} audioRef={audioRef} />
      <TrackList tracks={tracks} />
    </div>
  );
};

export default MainPage;
