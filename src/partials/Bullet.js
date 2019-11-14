//BASIC DESIGN OF TWO BULLETS

import {SVG_NS, BULLET_SPEED} from '../settings';


export default class Bullet {
    
    constructor(x, y, width, height, s) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.s = BULLET_SPEED;
    }

    bulletMove(){
        this.x += this.s;
    }

    bulletMove2(){
        this.x += this.s *  -1;
    }
 

    render(svg) {

        const bullet= document.createElementNS(SVG_NS, "rect");
        bullet.setAttributeNS(null, "width", this.width);
        bullet.setAttributeNS(null, "height", this.height);
        bullet.setAttributeNS(null, "x", this.x);
        bullet.setAttributeNS(null, "y", this.y);
        bullet.setAttributeNS(null, "fill", "white");
        
        svg.appendChild(bullet);

        
    }
}


  






