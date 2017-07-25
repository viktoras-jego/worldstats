import { Component } from '@angular/core';
@Component({
    selector: 'border-line',
    template: `
        <svg style="width: 100vw; height: 20px">
            <line x1="15%" x2="85%" y1="5" y2="5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray=".15, 15">
            </line>
        </svg>
    `
})
export class BorderLineComponent {

}
