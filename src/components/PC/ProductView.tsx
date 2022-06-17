import { games } from '@/data';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';
import AnimationWrapperChild from './AnimationWrapperChild';

const ProductView = () => {
  return (
    <AnimationWrapperChild headerStyle="dark" headerItem="#products">
      <div
        className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pb-0 pt-[75px]"
        style={{ backgroundImage: 'url(/images/bg_product.png)' }}
      >
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_product.png"
            alt="product"
            className="h-auto lg:h-[18vh]"
          />
        </div>
        <div className="grid grid-cols-4 gap-[44px] w-[80%] justify-between items-start mx-auto mt-[10vh] flex-wrap">
          {games.map((game, idx) => {
            return (
              <div key={idx} className="text-[#FFFFFF] text-center flex-1">
                <div className="flex justify-center">
                  <img
                    src={game.image}
                    alt={game.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-[18px] mt-[24px] font-bold">
                  {game.title}
                </div>
                <div className="text-[16px] mt-[24px] text-center">
                  {game.description}
                </div>
              </div>
            );
          })}
        </div>
        <Cr />
        <MouseHandle
          anchor="#cooperation"
          headerStyleOnScroll="dark"
          headerValueOnScroll="#cooperation"
        />
        <SocialList />
      </div>
    </AnimationWrapperChild>
  );
};

export default ProductView;
