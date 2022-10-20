import type { NextPage } from 'next';
import AudioPlayer from '../components/AudioPlayer';
import Box from '../components/Box';

import song from '../public/testAudio.mp3';
const track = {
  title: 'foo',
  artist: 'bar',
  audioSrc: song,
};

const Home: NextPage = () => {
  return (
    <div>
      <AudioPlayer tracks={track} />
      <Box />
    </div>
  );
};
export default Home;
