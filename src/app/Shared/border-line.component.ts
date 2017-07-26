import { Component } from '@angular/core';
@Component({
    selector: 'border-line',
    template: `
        <svg style="width: 100vw; height: 5px">
            <line
                  x1="7%" x2="93%" y1="5" y2="5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray=".15, 17">
            </line>
        </svg>
    `
})
export class BorderLineComponent {

}
