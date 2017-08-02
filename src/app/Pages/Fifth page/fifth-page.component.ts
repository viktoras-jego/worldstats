import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power3 } from 'gsap';
import { MnFullpageService } from 'ngx-fullpage';
import { CountoModule } from 'angular2-counto';

@Component({
    selector: 'app-fifth-page',
    templateUrl: './fifth-page.template.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FifthPageComponent implements AfterViewInit {

    @ViewChild('slide1')slideFirst: ElementRef;
    @ViewChild('slide2')slideSecond: ElementRef;
    @ViewChild('slide3')slideThird: ElementRef;
    public slide1: any;
    public slide2: any;
    public slide3: any;

    private inUse: boolean = false;

    constructor(private a: MnFullpageService) {
        const tl = new TimelineMax();
    }

    ngAfterViewInit(): void {
        this.slide1 = this.slideFirst.nativeElement;
        this.slide2 = this.slideSecond.nativeElement;
        this.slide3 = this.slideThird.nativeElement;
    }

    moveLeft(): void {
        if (!this.inUse) {
            this.inUse = true;
            const tl = new TimelineMax();
            const tl2 = new TimelineMax();
            const tl3 = new TimelineMax();
            tl.to(this.slide2, 2.2, {
                ease: Power3.easeOut,
                left: '150%'
            });
            tl2.to(this.slide1, 1.1, {
                ease: Power3.easeOut,
                left: '43.4%'
            });
            tl3.to(this.slide3, 0, {
                left: '-63.2%'
            });

            this.switchElementsRight();

            setTimeout(() => {
                this.inUse = false;
            }, 1100);
        }
    }

    moveRight(): void {
        if (!this.inUse) {
            this.inUse = true;
            const tl = new TimelineMax();
            const tl2 = new TimelineMax();
            const tl3 = new TimelineMax();
            tl.to(this.slide3, 1.1, {
                ease: Power3.easeOut,
                left: '43.4%'
            });
            tl2.to(this.slide2, 2.2, {
                ease: Power3.easeOut,
                left: '-63.2%'
            });
            tl3.to(this.slide1, 0, {
                ease: Power3.easeOut,
                left: '150%'
            });

            this.switchElementsLeft();

            setTimeout(() => {
                this.inUse = false;
            }, 1100);
        }
    }

    switchElementsRight(): void {
        const first = this.slide1;
        const second = this.slide2;

        this.slide1 = this.slide3;
        this.slide2 = first;
        this.slide3 = second;
    }

    switchElementsLeft(): void {
        const first = this.slide1;
        const third = this.slide3;

        this.slide1 = this.slide2;
        this.slide2 = third;
        this.slide3 = first;
    }

    goDown(): void {
        this.a.moveSectionDown();
    }
}
