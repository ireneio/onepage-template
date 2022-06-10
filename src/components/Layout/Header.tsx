import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from 'next/router';
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
];

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentHeader = useAppSelector((state) => state.layout.header.item);
  const headerMode = useAppSelector((state) => state.layout.header.style);

  const handleGoHomePage = () => {
    dispatch({ type: 'SET_HEADER_STYLE', payload: 'dark' });
    router.push('/');
  };

  const handleSetHeader = (header: {
    text: string;
    value: string;
    header: 'light' | 'dark';
  }) => {
    dispatch({ type: 'SET_HEADER_ITEM', payload: header.value });
    dispatch({ type: 'SET_HEADER_STYLE', payload: header.header });
  };

  return (
    <div
      className="z-[10] shadow-lg fixed top-0 left-0 flex w-[100vw] h-[75px] items-center px-[25px] mx-auto max-w-[3000px]"
      style={{
        backgroundColor: headerMode === 'light' ? '#FFFFFF' : 'rgba(0,0,0,.8)',
      }}
    >
      <div className="cursor-pointer w-[200px]">
        <ScrollIntoView selector="#entry" onClick={() => handleGoHomePage()}>
          {headerMode === 'dark' ? (
            <img
              className="block h-8 w-auto"
              src={'/images/logo.png'}
              alt="LXBW"
            />
          ) : (
            <img
              className="block h-8 w-auto"
              src={'/images/logo_dark.png'}
              alt="LXBW"
            />
          )}
        </ScrollIntoView>
      </div>
      <div className="relative w-[40vw] ml-auto flex justify-between">
        {headers.map((header) => {
          return (
            <ScrollIntoView key={header.value} selector={header.value}>
              <div
                className="text-[18px] cursor-pointer"
                style={{
                  color:
                    currentHeader === header.value
                      ? '#B39B5C'
                      : headerMode === 'light'
                      ? '#000000'
                      : '#FFFFFF',
                }}
                onClick={() => handleSetHeader(header)}
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
