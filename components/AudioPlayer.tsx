import React, { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls';

interface IProps {
  tracks: {
    title: string;
    artist: string;
    audioSrc: any;
  };
}

const AudioPlayer = ({ tracks }: IProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { audioSrc } = tracks;

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current !== null) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current !== null && isPlaying) {
      audioRef.current.volume = volume;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  useEffect(() => {
    if (audioRef.current !== null) {
      setElapsedTime(audioRef.current.currentTime);
    }
  }, [elapsedTime]);

  return (
    <div>
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        currentVolume={volume}
        setVolume={setVolume}
      />
      <div>time elapsed: {`${elapsedTime}`}</div>
    </div>
  );
};

export default AudioPlayer;
