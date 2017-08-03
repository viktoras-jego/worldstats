import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power3, Power1 } from 'gsap';
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
    @ViewChild('firstText')firstText: ElementRef;
    @ViewChild('secondText')secondText: ElementRef;
    @ViewChild('thirdText')thirdText: ElementRef;
    @ViewChild('people')people2: ElementRef;

    public slide1: any;
    public slide2: any;
    public slide3: any;

    public text1: any;
    public text2: any;
    public text3: any;

    public people: any;

    private inUse: boolean = false;

    constructor(private a: MnFullpageService) {
        const tl = new TimelineMax();
    }

    ngAfterViewInit(): void {
        this.slide1 = this.slideFirst.nativeElement;
        this.slide2 = this.slideSecond.nativeElement;
        this.slide3 = this.slideThird.nativeElement;

        this.text1 = this.firstText.nativeElement;
        this.text2 = this.secondText.nativeElement;
        this.text3 = this.thirdText.nativeElement;

        this.people = this.people2.nativeElement;
    }

    moveRight(): void {
        if (!this.inUse) {
            this.inUse = true;
            const tl = new TimelineMax();
            const tl2 = new TimelineMax();
            const tl3 = new TimelineMax();
            tl.to(this.slide2, 2.2, {
                ease: Power3.easeOut,
                marginLeft: '-80%',
            });
            tl2.to(this.slide1, 0, {
                ease: Power3.easeOut,
                marginLeft: '80%',
            });
            tl3.to(this.slide3, 1.1, {
                ease: Power3.easeOut,
                marginLeft: '0%',
            });

            const t = new TimelineMax();

            t.to(this.text2, 0.55, {
                ease: Power1.easeOut,
                opacity: 0,
            });
            t.to(this.text3, 0.55, {
                ease: Power1.easeIn,
                opacity: 1,
            });

            this.switchElementsRight();

            setTimeout(() => {
                this.inUse = false;
            }, 1100);
        }
    }

    moveLeft(): void {
        if (!this.inUse) {
            this.inUse = true;
            const tl = new TimelineMax();
            const tl2 = new TimelineMax();
            const tl3 = new TimelineMax();
            tl.to(this.slide3, 0, {
                ease: Power3.easeOut,
                marginLeft: '-80%',
            });
            tl2.to(this.slide2, 2.2, {
                ease: Power3.easeOut,
                marginLeft: '80%',
            });
            tl3.to(this.slide1, 1.1, {
                ease: Power3.easeOut,
                marginLeft: '0%',
            });

            const t = new TimelineMax();

            t.to(this.text2, 0.55, {
                ease: Power1.easeOut,
                opacity: 0,
            });
            t.to(this.text1, 0.55, {
                ease: Power1.easeIn,
                opacity: 1,
            });

            this.switchElementsLeft();

            setTimeout(() => {
                this.inUse = false;
            }, 1100);
        }
    }

    switchElementsLeft(): void {
        const first = this.slide1;
        const second = this.slide2;
        const firsttxt = this.text1;
        const secondtxt = this.text2;

        this.slide1 = this.slide3;
        this.slide2 = first;
        this.slide3 = second;

        this.text1 = this.text3;
        this.text2 = firsttxt;
        this.text3 = secondtxt;
    }

    switchElementsRight(): void {
        const first = this.slide1;
        const third = this.slide3;
        const firstTxt = this.text1;
        const thirdTxt = this.text3;

        this.slide1 = this.slide2;
        this.slide2 = third;
        this.slide3 = first;

        this.text1 = this.text2;
        this.text2 = thirdTxt;
        this.text3 = firstTxt;
    }

    goDown(): void {
        this.a.moveSectionDown();
    }
}
