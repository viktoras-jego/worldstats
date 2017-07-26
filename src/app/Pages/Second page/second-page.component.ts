import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, OnChanges, SimpleChanges, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power2 } from 'gsap';
import { MnFullpageService } from 'ngx-fullpage';
import { CountoModule } from 'angular2-counto';

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SecondPageComponent implements AfterViewInit {

    @ViewChild('cursor')cursor: ElementRef;
    screenTest = true;
    public duration = 0.3;

    public from = 0;
    public coalFrom = 0;
    public goldFrom = 0;

    public perSecond = 1246.19482;
    public coalPerSecond = 244.01953;
    public goldPerSecond = 0.000085616438;

    public to = this.perSecond;
    public coalTo = this.coalPerSecond;
    public goldTo = this.goldPerSecond;

    constructor(private a: MnFullpageService,
                private cdRef: ChangeDetectorRef,
                public counto: CountoModule,
                public counto2: CountoModule,
                public counto3: CountoModule) {
        const tl = new TimelineMax();

    }

    ngAfterViewInit(): void {
        const tl = new TimelineMax({delay: 1, repeat: -1});
        const cursor = this.cursor.nativeElement;
        this.screenTest = false;
        this.cdRef.detectChanges();

    }

    screenChanged(): void {
        this.screenTest = false;
    }

    goDown(): void {
        this.a.moveSectionDown();
    }
    changeCounter(): void {
        setTimeout(() => {
            this.from = this.to;
            this.to += this.perSecond;
            this.coalFrom = this.coalTo;
            this.coalTo += this.coalPerSecond;
            this.goldFrom = this.goldTo;
            this.goldTo += this.goldPerSecond;
        }, 700);
    }

}
