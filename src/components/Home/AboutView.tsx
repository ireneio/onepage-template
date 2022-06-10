import { about } from '@/data';
import Cr from '../General/Cr';
import SocialList from '../General/SocialList';

const AboutView = () => {
  return (
    <div
      id="about"
      className="w-full h-[100vh] bg-[#FFFFFF] text-[#FFFFFF] pt-[75px]"
    >
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[12px]">
        <img src="/images/banner_about.png" alt="about" className="h-[18vh]" />
      </div>
      <div className="justify-between flex flex-wrap px-[140px]">
        <div className="text-[#000000] basis-[50%]">
          <div className="font-semibold pr-[80px] mb-[32px]">
            我们是真正能站在您与用户的角度考虑的平台，想您所想，急您所急。
            十一年的游戏研发团队，十五年的网络安全团队。
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            {about.map((feature, idx) => {
              return (
                <div key={idx} className="text-center w-[230px]">
                  <div className="flex justify-center">
                    <img src={feature.image} alt="" />
                  </div>
                  <div className="font-bold text-[18px]">{feature.title}</div>
                  <div>{feature.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-[50%] flex">
          <div className="ml-auto">
            <img
              src="/images/about_intro_right.png"
              alt=""
              className="w-[350px]"
            />
          </div>
        </div>
      </div>
      <Cr />
      <SocialList />
    </div>
  );
};

export default AboutView;
