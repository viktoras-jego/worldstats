import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {TweenMax, TimelineMax, Back, Quad} from 'gsap';
@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FirstPageComponent implements AfterViewInit {

    @ViewChild('clock')clock: ElementRef;

    constructor() {
        const tl = new TimelineMax();

    }

    ngAfterViewInit(): void {
        console.log(this.clock.nativeElement);
    }

}
