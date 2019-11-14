import { SVG_NS , PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_GAP, KEYS, CIRCLE_RADIOUS, BOARD_WIDTH, BOARD_HEIGHT, PADDLE_SPEED, TEXT_SIZE, WINNER_SCORE, BULLET_HEIGHT, BULLET_WIDTH} from "../settings";
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import winner from './winner';
import Bullet from './Bullet';
import startSound from '../../public/sounds/hockey.mp3';
import endSound from '../../public/sounds/GAME.mp3';



export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddle1 = new Paddle(PADDLE_WIDTH,  PADDLE_HEIGHT, this.height, PADDLE_GAP,  (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p1Up, KEYS.p1Down);
    this.paddle2 = new Paddle(PADDLE_WIDTH,  PADDLE_HEIGHT, this.height, this.width - PADDLE_GAP - PADDLE_WIDTH,  (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p2Up, KEYS.p2Down);
    this.mainBall = new Ball(BOARD_WIDTH , BOARD_HEIGHT, CIRCLE_RADIOUS);
    this.score1 =  new Score(this.width / 2 - 50, 30, TEXT_SIZE);
    this.score2 =  new Score(this.width / 2 + 25, 30, TEXT_SIZE);
    this.win = new winner(this.width/2 - 140, this.height/2, 60 );
    this.start = new Audio(startSound);
    this.end = new Audio(endSound);
    this.theBullet = new Bullet(this.x = PADDLE_HEIGHT/2, this.height/2, BULLET_HEIGHT, BULLET_WIDTH);
    this.theBullet2 = new Bullet(this.x = this.width - PADDLE_HEIGHT, this.height/2, BULLET_HEIGHT, BULLET_WIDTH);
    this.paused = false;
    document.addEventListener("keydown", event => {
      if (event.key === KEYS.pause){
        this.paddle1.setSpeed(PADDLE_SPEED);
        this.paddle2.setSpeed(PADDLE_SPEED);
        this.paused = !this.paused;
      }

    });

		// Other code goes here...
  }

  playerWin(svg) {
    if (this.paddle1.score === WINNER_SCORE || this.paddle2.score === WINNER_SCORE) {
      this.paddle1.resetScore();
      this.paddle2.resetScore();
      this.paddle1.height = PADDLE_HEIGHT;
      this.paddle2.height = PADDLE_HEIGHT;
      this.paddle1.y =(this.height/2) - (PADDLE_HEIGHT/2);
      this.paddle2.y =(this.height/2) - (PADDLE_HEIGHT/2);
      this.win.render(svg);
      this.end.play();
      this.paused = true;
    }
  }



  render() {
    if (this.paused){
      this.paddle1.setSpeed(0);
      this.paddle2.setSpeed(0);
      return;
    }

    this.gameElement.innerHTML = " ";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.start.play();
    this.start.volume = 0.1;
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.mainBall.render(svg, this.paddle1, this.paddle2);
    this.score1.render(svg, this.paddle1.getScore());
    this.score2.render(svg, this.paddle2.getScore());
    this.playerWin(svg);
    // this.theBullet.render(svg);
    // this.theBullet2.render(svg);

		// More code goes here....
  }
}



