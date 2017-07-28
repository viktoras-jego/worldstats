import { Component } from '@angular/core';
@Component({
    selector: 'border-line',
    template: `
        <svg style="width: 100vw; height: 8px">
            <line x1="7%" x2="93%" y1="2" y2="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray=".15, 17">
            </line>
        </svg>
    `
})
export class BorderLineComponent {

}
