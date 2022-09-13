import React from 'react';
import './DotGrid.scss';

interface DotGridProps {
  offsetX: number,
  offsetY: number,
  height: number,
  width:  number,
  top:    boolean,
  bottom: boolean,
  left:   boolean,
  right:  boolean,
}

DotGrid.defaultProps = {
  offsetX: 30,
  offsetY: 30,
  width:  300,
  height: 200,
  top:    false,
  bottom: false,
  left:   false,
  right:  false,
};

export default function DotGrid(props: DotGridProps) {
  const offsetX = `-${props.offsetX}px`;
  const offsetY = `-${props.offsetY}px`;
  const width = `${props.width}px`;
  const height = `${props.height}px`;

  return (
    <div 
      className="dot-grid"
      style={{
        width:  width,
        height: height,
        top:    props.top    ? offsetY : '',
        bottom: props.bottom ? offsetY : '',
        left:   props.left   ? offsetX : '',
        right:  props.right  ? offsetX : '',
      }}
    />
  );
}
