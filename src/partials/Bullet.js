import {SVG_NS} from '../settings';

export default class Bullet {
    
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.size = size;
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


  






