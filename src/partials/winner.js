import {SVG_NS, WINNER_COLOR} from '../settings';

export default class winner {
    
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    


    render(svg) {

        const winnerText = document.createElementNS(SVG_NS, "text");
        winnerText.textContent = 'WINNER!!';
        winnerText.setAttributeNS(null, "x", this.x);
        winnerText.setAttributeNS(null, "y", this.y);
        winnerText.setAttributeNS(null, "font-size", this.size);
        winnerText.setAttributeNS(null, "font-family", " 'Silkscreen Web', monotype");
        winnerText.setAttributeNS(null, "fill", WINNER_COLOR);
        
        
        // const winnerText2 = document.createElementNS(SVG_NS, "text");
        // winnerText2.textContent = 'P2 WINNER!!';
        // winnerText2.setAttributeNS(null, "x", this.x);
        // winnerText2.setAttributeNS(null, "y", this.y);
        // winnerText2.setAttributeNS(null, "font-size", this.size);
        // winnerText2.setAttributeNS(null, "font-family", " 'Silkscreen Web', monotype");
        // winnerText2.setAttributeNS(null, "fill", WINNER_COLOR);
        // // svg.appendChild(winnerText2);
        svg.appendChild(winnerText);

        
    }
}


  






