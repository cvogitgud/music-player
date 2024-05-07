import thegardenofwords from '../img/thegardenofwords.jpg';

const SongDetails = () => {
  return (
    <div className="SongDetails flex justify-center mt-7 basis-1/3">
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
  );
};

export default SongDetails;
