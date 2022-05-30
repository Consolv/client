import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const routes = [
  { path: '/', name: '홈' },
  { path: '/upload', name: '업로드' },
  { path: '/content', name: '나의 콘텐츠' },
  { path: '/profile', name: '프로필' },
  { path: '/login', name: '로그인' },
];

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full fixed bg-white z-40">
      <div className="max-w-[1640px] w-5/6 m-auto text-black">
        <div className="flex flex-row justify-between">
          <div className="my-5">
            <Image src="/logo.svg" width={227} height={45} />
          </div>
          <div className="mb-5 w-full border-b-2 border-black flex justify-end">
            <div className="w-96 flex flex-row font-bold justify-evenly text-sm ">
              {routes.map((route, idx) => {
                if (router.pathname.includes(route.path)) {
                  return (
                    <div key={idx} className="px-3 flex justify-center items-center bg-blue-500 text-white  h-full">
                      <Link href={route.path}>
                        <a>{route.name}</a>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={idx} className="px-3 flex justify-center items-center">
                      <Link href={route.path}>
                        <a>{route.name}</a>
                      </Link>
                    </div>
                  );
                }
              })}

              <div className="w-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
