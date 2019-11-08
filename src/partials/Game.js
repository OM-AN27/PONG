import { SVG_NS , PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_GAP, KEYS, CIRCLE_RADIOUS, BOARD_WIDTH, BOARD_HEIGHT} from "../settings";
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.Board = new Board(this.width, this.height);
    this.Paddle1 = new Paddle(PADDLE_WIDTH,  PADDLE_HEIGHT, this.height, PADDLE_GAP,  (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p1Up, KEYS.p1Down);
    this.Paddle2 = new Paddle(PADDLE_WIDTH,  PADDLE_HEIGHT, this.height, this.width - PADDLE_GAP - PADDLE_WIDTH,  (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p2Up, KEYS.p2Down);
    this.mainBall = new Ball(BOARD_WIDTH , BOARD_HEIGHT, CIRCLE_RADIOUS);

		// Other code goes here...
  }

  render() {
    this.gameElement.innerHTML = " ";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.Board.render(svg);
    this.Paddle1.render(svg);
    this.Paddle2.render(svg);
    this.mainBall.render(svg, this.Paddle1, this.Paddle2);

		// More code goes here....
  }
}
