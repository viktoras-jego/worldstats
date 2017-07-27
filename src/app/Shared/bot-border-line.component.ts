import { Component } from '@angular/core';
@Component({
    selector: 'bot-border-line',
    template: `
        <svg style="position: absolute; bottom: 0;transform: translate(-50%, 0); width: 100%" height="8px">
            <line x1="7%" x2="93%" y1="5" y2="5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-dasharray=".15, 17">
            </line>
        </svg>
    `
})
export class BotBorderLineComponent {

}
