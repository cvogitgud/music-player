// display the tracklist/queue
// queue is meant to be full of ints (track indices)
// if shuffleOn, queue is shuffled in AudioPlayer
// else, queue contains ints from 0 to tracks.length - 1

const TrackList = ({ tracks }) => {
  let count = 0;

  return (
    <div id="track-list-div" className="basis-1/3 mt-5">
      <h2 className="text-3xl border-solid mb-3">Track List</h2>
      <div id="queue">
        {tracks.map((track) => (
          <div className="flex rounded border-solid border border-slate-500/10 shadow-md p-2 pl-3 mb-3 mr-5 w-30">
            <p className="mr-5">{++count}</p>
            <p key={track.id}>{track.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
