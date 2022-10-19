import type { NextPage } from 'next';
import AudioPlayer from '../components/AudioPlayer';
import song from '../public/testAudio.mp3';

//tracks: {
//    title: string;
//    artist: string;
//    audioSrc: string;
//    image: string;
//}
const track = {
  title: 'foo',
  artist: 'bar',
  audioSrc: song,
};

const Home: NextPage = () => {
  return (
    <div>
      <AudioPlayer tracks={track} />
    </div>
  );
};
export default Home;
