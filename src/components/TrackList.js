// display the tracklist/queue
// for it to be a queue, you'd have to see into the future
// so shuffle would actually not just choose random for next track
// it would have to randomize a separate Queue

// so instead of tracks, i may have to create a queue in AudioPlayer
// then pass the queue to Tracklist, then display that
// every time we shuffle, it would re-render the queue

// will need more tracks
// add firebase before or after we do that?
// let's choose after, i think i can bang the shuffle and queue out soon

const TrackList = ({ tracks, queue }) => {
  return (
    <div id="track-list-div" className="basis-1/3 mt-5">
      <p>Track list</p>
      <div id="queue">
        {queue.map((index) => (
          <p>{tracks[index].title}</p>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
