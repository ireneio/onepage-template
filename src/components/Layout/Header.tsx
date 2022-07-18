import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

interface Header {
  text: string;
  value: string;
  header: 'light' | 'dark';
}

const headers: Header[] = [
  { text: '首页', value: '#entry', header: 'dark' },
  { text: '包网模板', value: '#template', header: 'light' },
  { text: '产品介绍', value: '#products', header: 'dark' },
  { text: '业务合作', value: '#cooperation', header: 'light' },
  { text: '合作伙伴', value: '#partners', header: 'dark' },
  { text: '公司简介', value: '#about', header: 'light' },
  { text: '支付优势', value: '#pay', header: 'dark' },
];

const Header = ({
  selected,
  bg,
}: {
  selected: string;
  bg: 'light' | 'dark';
}) => {
  return (
    <div className="z-[10] bg-transparent absolute top-0 left-0 flex w-[100vw] h-[75px] items-center px-[25px] mx-auto">
      <div className="cursor-pointer w-[200px]">
        <ScrollIntoView selector="#entry">
          {bg === 'dark' ? (
            <img
              className="block"
              src={'/images/logo.png'}
              alt="LXBW"
              width={250}
              height={58}
            />
          ) : (
            <img
              className="block"
              src={'/images/logo_dark.png'}
              alt="LXBW"
              width={250}
              height={58}
            />
          )}
        </ScrollIntoView>
      </div>
      <div className="relative w-[45vw] ml-auto flex justify-between">
        {headers.map((header) => {
          return (
            <ScrollIntoView key={header.value} selector={header.value}>
              <div
                className="text-[18px] cursor-pointer"
                style={{
                  color:
                    selected === header.value
                      ? '#B39B5C'
                      : bg === 'light'
                      ? '#000000'
                      : '#FFFFFF',
                }}
              >
                {header.text}
              </div>
            </ScrollIntoView>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
