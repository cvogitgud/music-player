import { useState } from 'react';

const SongDetails = ({ currentTrack }) => {
  return (
    <div className="SongDetails flex justify-center mt-7 basis-1/3">
      <div>
        <img
          src={currentTrack.thumbnail}
          alt="track art"
          className="track-art size-96 object-cover shadow-xl rounded"
        />

        <p className="track-artist-title mt-5 m-3 ml-0 flex justify-start">
          {currentTrack.artist} - {currentTrack.title}
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
