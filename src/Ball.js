import { SVG_NS } from "../settings";

export default class Ball {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    render(svg) {
        const circle = document.createElementNS(SVG_NS, "circle");
        
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.height);
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "fill", "white");
        
        svg.appendChild(circle);
        
      //...
    }
  }