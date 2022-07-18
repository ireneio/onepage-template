import { sidebarItems } from '@/data';
import { useMemo, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const SideScroller = ({
  selected,
  bg,
}: {
  selected: string;
  bg: 'light' | 'dark';
}) => {
  const [currentHover, setCurrentHover] = useState(-1);

  const handleMouseEnter = (idx: number) => {
    if (currentHover !== idx) {
      setCurrentHover(idx);
    }
  };

  const handleMouseLeave = () => {
    setCurrentHover(-1);
  };

  const prev = useMemo(() => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === selected,
    );
    const prevItem = sidebarItems[currentIdx - 1];
    if (prevItem) {
      return prevItem.value;
    } else {
      return '#';
    }
  }, [selected]);

  const next = useMemo(() => {
    const currentIdx = sidebarItems.findIndex(
      (item) => item.value === selected,
    );
    const nextItem = sidebarItems[currentIdx + 1];
    if (nextItem) {
      return nextItem.value;
    } else {
      return '#';
    }
  }, [selected]);

  return (
    <div
      aria-label="side scroller"
      className="absolute right-[24px] top-[50%] translate-y-[-50%] z-[2]"
    >
      <ScrollIntoView
        selector={prev}
        className="mb-[24px] flex items-center justify-center cursor-pointer"
      >
        <img src="/images/sidescroller_up.png" alt="" />
      </ScrollIntoView>
      {sidebarItems.map((item, idx) => {
        return (
          <div key={item.value} className="mb-[24px] cursor-pointer">
            <ScrollIntoView selector={item.value}>
              <div
                className="text-[#3C3C3C] hover:text-[#B39B5C]"
                style={{
                  color:
                    currentHover === idx
                      ? '#B39B5C'
                      : bg === 'light'
                      ? selected === item.value
                        ? '#313131'
                        : '#BCBCBC'
                      : selected === item.value
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
      >
        <img src="/images/sidescroller_down.png" alt="" />
      </ScrollIntoView>
    </div>
  );
};

export default SideScroller;
