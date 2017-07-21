import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineMax, Back, Power2 } from 'gsap';

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SecondPageComponent implements AfterViewInit {

    @ViewChild('cursor')cursor: ElementRef;

    constructor() {
        const tl = new TimelineMax();

    }

    ngAfterViewInit(): void {
        const tl = new TimelineMax({delay: 1, repeat: -1});
        const cursor = this.cursor.nativeElement;

    // there should be on click function to next page

    }

}
