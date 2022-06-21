import { games } from '@/data';
import AnimationWrapperChild from '../PC/AnimationWrapperChild';

const H5ProductView = () => {
  return (
    <div
      id="products"
      className="relative z-[4] w-full lg:h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[24px] pb-[24px] overflow-hidden"
      style={{ backgroundImage: 'url(/images/bg_product.png)' }}
    >
      <AnimationWrapperChild delay={0.3}>
        <div className="w-[80%] mx-auto flex justify-center items-center mt-[18px]">
          <img
            src="/images/banner_product.png"
            alt="product"
            className="h-auto"
          />
        </div>
      </AnimationWrapperChild>
      <AnimationWrapperChild delay={0.5}>
        <div className="grid grid-cols-2 gap-[44px] w-[80%] justify-between items-start mx-auto mt-[48px] flex-wrap">
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
                <div className="text-[15px] mt-[24px] font-bold">
                  {game.title}
                </div>
                <div className="text-[12px] mt-[24px] text-center">
                  {game.description}
                </div>
              </div>
            );
          })}
        </div>
      </AnimationWrapperChild>
    </div>
  );
};

export default H5ProductView;
