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
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const { audioSrc } = tracks;

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    // every second that passes update interval
    intervalRef.current = setInterval(() => {
      if (audioRef.current !== null) {
        setTrackProgress(Math.round(audioRef.current.currentTime));
      }
    }, 1000);
  };

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current !== null) {
      if (isPlaying) {
        startTimer();
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

  return (
    <div>
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        currentVolume={volume}
        setVolume={setVolume}
      />
      <div>time elapsed: {`${trackProgress}`}</div>
    </div>
  );
};

export default AudioPlayer;
