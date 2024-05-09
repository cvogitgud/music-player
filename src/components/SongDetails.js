import { useState } from 'react';

const SongDetails = ({ currentTrack }) => {
  const [title, setTitle] = useState(currentTrack.title);
  const [thumbnail, setThumbnail] = useState(currentTrack.thumbnail);
  const [artist, setArtist] = useState(currentTrack.artist);

  return (
    <div className="SongDetails flex justify-center mt-7 basis-1/3">
      <div>
        <img
          src={thumbnail}
          alt="garden of words"
          className="track-art size-96 object-cover"
        />

        <p className="track-artist-title mt-5 m-3 ml-0 flex justify-start">
          {artist} - {title}
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
