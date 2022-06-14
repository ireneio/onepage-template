import { sidebarItems } from '@/data';
import { useAppDispatch, useAppSelector } from '@/store';
import { useMemo, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const SideScroller = () => {
  const dispatch = useAppDispatch();
  const headerItem = useAppSelector((state) => state.layout.header.item);
  const headerStyle = useAppSelector((state) => state.layout.header.style);

  const [currentHover, setCurrentHover] = useState(-1);

  const handleMouseEnter = (idx: number) => {
    if (currentHover !== idx) {
      setCurrentHover(idx);
    }
  };

  const handleMouseLeave = () => {
    setCurrentHover(-1);
  };

  const handleSwitch = (theme: 'light' | 'dark', item: string) => {
    dispatch({ type: 'SET_HEADER_ITEM', payload: item });
    dispatch({ type: 'SET_HEADER_STYLE', payload: theme });
    window.location.href = item;
  };

  const handlePrev = () => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === headerItem,
    );
    const prevItem = sidebarItems[currentIdx - 1];
    if (prevItem) {
      dispatch({ type: 'SET_HEADER_ITEM', payload: prevItem.value });
      dispatch({
        type: 'SET_HEADER_STYLE',
        payload: prevItem.theme as 'light' | 'dark',
      });
    }
  };

  const handleNext = () => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === headerItem,
    );
    const nextItem = sidebarItems[currentIdx + 1];
    if (nextItem) {
      dispatch({ type: 'SET_HEADER_ITEM', payload: nextItem.value });
      dispatch({
        type: 'SET_HEADER_STYLE',
        payload: nextItem.theme as 'light' | 'dark',
      });
    }
  };

  const prev = useMemo(() => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === headerItem,
    );
    const prevItem = sidebarItems[currentIdx - 1];
    if (prevItem) {
      return prevItem.value;
    } else {
      return '#';
    }
  }, [headerItem, headerStyle]);

  const next = useMemo(() => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === headerItem,
    );
    const nextItem = sidebarItems[currentIdx + 1];
    if (nextItem) {
      return nextItem.value;
    } else {
      return '#';
    }
  }, [headerItem, headerStyle]);

  return (
    <div aria-label="side scroller">
      <ScrollIntoView
        selector={prev}
        className="mb-[24px] flex items-center justify-center cursor-pointer"
        onClick={() => handlePrev()}
      >
        <img src="/images/sidescroller_up.png" alt="" />
      </ScrollIntoView>
      {sidebarItems.map((item, idx) => {
        return (
          <div key={item.value} className="mb-[24px] cursor-pointer">
            <ScrollIntoView
              selector={item.value}
              onClick={() =>
                handleSwitch(item.theme as 'light' | 'dark', item.value)
              }
            >
              <div
                className="text-[#3C3C3C] hover:text-[#B39B5C]"
                style={{
                  color:
                    currentHover === idx
                      ? '#B39B5C'
                      : headerStyle === 'light'
                      ? headerItem === item.value
                        ? '#313131'
                        : '#BCBCBC'
                      : headerItem === item.value
                      ? '#FFFFFF'
                      : '#747474',
                }}
                onMouseOver={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {item.tag}
              </div>
            </ScrollIntoView>
          </div>
        );
      })}
      <ScrollIntoView
        selector={next}
        className="mb-[24px] flex items-center justify-center cursor-pointer"
        onClick={() => handleNext()}
      >
        <img src="/images/sidescroller_down.png" alt="" />
      </ScrollIntoView>
    </div>
  );
};

export default SideScroller;
