import Tool from './Tools';

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
  }

  mouseUpHandler(event) {
    this.mouseDown = false;
  }
  mouseDownHandler(event) {
    this.mouseDown = true;
    let startX = event.pageX - event.target.offsetLeft;
    let startY;
    this.ctx.beginPath();
  }
  mouseMoveHandler(event) {
    if (this.mouseDown) {
      let width;
      let height;
      this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
    }
  }

  draw(x, y, w, h) {}
}
