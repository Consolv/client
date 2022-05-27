import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import VideoBox from '@components/box/video-box';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/background1.png);' }}>
      <div className="w-11/12 m-auto">
        <div className="flex flex-col mt-12 space-y-5 pb-24">
          <h2 className="font-medium text-lg mb-5">저작권 원본 증명 서비스</h2>
          <h1 className="font-bold text-4xl ">
            찾아줘!
            <br />
            불펌된 나의 콘텐츠!
          </h1>
          <p>
            수정·증감이나 변경이 가해진 것이라 해도
            <br />
            허락받지 않은 콘텐츠는 원작자를 힘들게 한다.
            <br />
            세상의 모든 콘텐츠의 불펌을 막을 때까지 끝까지 찾아낸다!
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-3xl">최근 찾아낸 나의 콘텐츠</h2>
          <div className="flex w-full flex-row space-x-3">
            {[0, 0, 0, 0].map((_, idx) => {
              return <VideoBox key={idx} id={idx} src={''} title={'title'} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
