import React, { useRef } from 'react';
import { GraphCanvas, GraphCanvasRef } from '../../src';
import { simpleEdges, simpleNodes } from '../assets/demo';

export default {
  title: 'Demos/Controls',
  component: GraphCanvas
};

export const All = () => {
  const ref = useRef<GraphCanvasRef | null>(null);

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
      <div style={{ zIndex: 9, position: 'absolute', top: 15, right: 15, background: 'rgba(0, 0, 0, .5)', padding: 1, color: 'white' }}>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.centerGraph()}>Center</button>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.centerGraph([simpleNodes[2].id])}>Center Node 2</button>
        <br />
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.zoomIn()}>Zoom In</button>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.zoomOut()}>Zoom Out</button>
        <br />
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.panDown()}>Pan Down</button>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.panUp()}>Pan Up</button>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.panLeft()}>Pan Left</button>
        <button style={{ display: 'block', width: '100%' }} onClick={() => ref.current.panRight()}>Pan Right</button>
      </div>
      <GraphCanvas ref={ref} nodes={simpleNodes} edges={simpleEdges} />
    </div>
  );
};

export const Rotate = () => (
  <GraphCanvas cameraMode="rotate" nodes={simpleNodes} edges={simpleEdges} />
);
