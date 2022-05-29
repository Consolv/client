import { NextPage } from 'next';
import PrivacyBox from '@components/profile/privacy-box';

const Profile: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-44">
        <span className="flex w-full h-full justify-center items-center font-bold text-4xl">프로필 관리</span>
      </div>
      <div className="flex flex-row w-3/5 space-x-20 m-auto">
        <div className="basis-1/2">
          <PrivacyBox />
        </div>
        <div className="basis-1/2 flex flex-col"></div>
      </div>
    </div>
  );
};

export default Profile;
