import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import VideoBox from '@components/box/video-box';
import Description from '@components/main/description';
import Plan from '@components/main/plan';
import Partners from '@components/main/partners';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-[1640px] w-5/6 m-auto">
        <Description />
      </div>
      <div className="bg-blue-400">
        <div className="max-w-[1640px] w-5/6 m-auto">
          <Plan />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1640px] w-5/6 m-auto">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default Home;
