import { useState } from 'react';

const SongDetails = ({ currentTrack, audioRef }) => {
  return (
    <div className="SongDetails flex justify-center mt-7 basis-1/3">
      <audio src={currentTrack.src} ref={audioRef}></audio>
      <div>
        <img
          src={currentTrack.thumbnail}
          alt="garden of words"
          className="track-art size-96 object-cover"
        />

        <p className="track-artist-title mt-5 m-3 ml-0 flex justify-start">
          {currentTrack.artist} - {currentTrack.title}
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
