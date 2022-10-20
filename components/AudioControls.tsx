interface IProps {
  isPlaying: any;
  onPlayPauseClick: any;
  currentVolume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  currentVolume,
  setVolume,
}: IProps) => {
  const increaseVolume = () => {
    if (currentVolume <= 0.9) {
      setVolume(currentVolume + 0.1);
    }
  };

  const decreaseVolume = () => {
    if (currentVolume >= 0.1) {
      setVolume(currentVolume - 0.1);
    }
  };

  return (
    <div>
      {isPlaying ? (
        <button
          type='button'
          className='pause'
          onClick={() => onPlayPauseClick(false)}
          aria-label='Pause'
        >
          Pause
        </button>
      ) : (
        <button
          type='button'
          className='play'
          onClick={() => onPlayPauseClick(true)}
          aria-label='Play'
        >
          Play
        </button>
      )}
      <div className='bg-green-500' onClick={increaseVolume}>
        +
      </div>
      <div className='bg-red-500' onClick={decreaseVolume}>
        -
      </div>
    </div>
  );
};

export default AudioControls;
