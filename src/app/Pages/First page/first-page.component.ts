import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineMax, Back } from 'gsap';

@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.template.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FirstPageComponent implements AfterViewInit {

    @ViewChild('clock')clock: ElementRef;
    @ViewChild('title')title: ElementRef;

    constructor() {
        const tl = new TimelineMax();

    }

    ngAfterViewInit(): void {
        const tl = new TimelineMax({delay: 2.7});
        const tl2 = new TimelineMax({});
        const clock = this.clock.nativeElement;
        const title = this.title.nativeElement;

        tl2.from(title, 2.3, {
            ease: Back.easeIn.config(1.1),
            opacity: 0
        });

        tl2.from(clock, 0.2, {
            delay: 0.1,
            visibility: 'hidden'
        });

        tl.to(clock, 2, {
            ease: Back.easeOut.config(1.6),
            top: '25%',
        });

        // console.log(this.clock.nativeElement);
    }

}
