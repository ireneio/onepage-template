import React from 'react';

const SnapScrollChild = ({ children }: { children: React.ReactNode }) => {
  return <div className="snap-start h-[100vh] w-[100vw]">{children}</div>;
};

export default SnapScrollChild;
