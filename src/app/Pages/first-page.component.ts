import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {TweenMax, TimelineMax, Back, Quad} from 'gsap';
@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FirstPageComponent implements AfterViewInit {


    constructor() {
        const tl = new TimelineMax();
        console.log(tl);
    }

    ngAfterViewInit(): void {
    }

}
