import { games } from '@/data';
import Cr from '../General/Cr';
import MouseHandle from '../General/MouseHandle';
import SocialList from '../General/SocialList';

const ProductView = () => {
  return (
    <div
      id="products"
      className="relative w-full h-[100vh] bg-[#000000] text-[#FFFFFF] bg-no-repeat bg-cover bg-center pt-[75px]"
      style={{ backgroundImage: 'url(/images/bg_product.png)' }}
    >
      <div className="w-[80%] mx-auto flex justify-center items-center mt-[32px]">
        <img
          src="/images/banner_product.png"
          alt="product"
          className="h-[18vh]"
        />
      </div>
      <div className="flex w-[80%] justify-between items-start mx-auto mt-[10vh] flex-wrap">
        {games.map((game, idx) => {
          return (
            <div key={idx} className="text-[#FFFFFF] text-center flex-1">
              <div className="flex justify-center">
                <img src={game.image} alt={game.title} />
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
  );
};

export default ProductView;
