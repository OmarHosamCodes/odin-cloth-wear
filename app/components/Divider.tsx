import React from "react";

interface DividerProps {
  width: number;
  height: number;
  thickness: number;
  color: string;
}

const Divider: React.FC<DividerProps> = ({
  width,
  height,
  thickness,
  color,
}) => {
  const dividerStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderBottom: `${thickness}px solid ${color}`,
  };

  return <div style={dividerStyle}></div>;
};

export default Divider;
