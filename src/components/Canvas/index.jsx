import React from 'react';
import { observer } from 'mobx-react-lite';

import canvasState from '../../store/canvasState';
import Brush from '../../tools/Brush';
import toolState from '../../store/toolState';

import './style.scss';

const Canvas = observer(() => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400}></canvas>
    </div>
  );
});

export default Canvas;
