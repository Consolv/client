import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between pt-10 pb-4 border-b-2">
      <Image src="/logo.png" width={153} height={30} />
      <div className="flex flex-row justify-evenly space-x-5 ">
        <Link href="/">
          <a>홈</a>
        </Link>
        <Link href="/upload">
          <a className="border-b-2 border-blue-500">업로드</a>
        </Link>
        <Link href="/contents">
          <a>나의 콘텐츠</a>
        </Link>
        <Link href="/channel">
          <a>채널 관리</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
