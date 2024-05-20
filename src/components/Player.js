import Controls from './Controls.js';
import VolumeSlider from './VolumeSlider.js';

const Player = ({
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  currentTrack,
  nextTrackIndex,
  audioRef,
}) => {
  return (
    <div className="sections flex align-top">
      <div id="filler" className="mt-3 basis-1/3"></div>
      <Controls
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        setCurrentTrack={setCurrentTrack}
        currentTrack={currentTrack}
        nextTrackIndex={nextTrackIndex}
        audioRef={audioRef}
      />
      <VolumeSlider audioRef={audioRef} />
    </div>
  );
};

export default Player;
