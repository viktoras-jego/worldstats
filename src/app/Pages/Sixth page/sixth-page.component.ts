import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power2 } from 'gsap';
import { MnFullpageService } from 'ngx-fullpage';
import { CountoModule } from 'angular2-counto';

@Component({
    selector: 'app-sixth-page',
    templateUrl: './sixth-page.template.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SixthPageComponent implements AfterViewInit {

    public seconds: number = 0;
    public minutes: number = 0;
    public duration = 0.3;

    public producedFrom = 0;
    public consumedFrom = 0;
    public wastedFrom = 0;

    public producedPerSecond = 126.60;
    public consumedPerSecond = 86.3;
    public wastedPerSecond = 41.3;

    public producedTo = this.producedPerSecond;
    public consumedTo = this.consumedPerSecond;
    public wastedTo = this.wastedPerSecond;

    public timer = 0;

    constructor(private a: MnFullpageService,
                private cdRef: ChangeDetectorRef,
                public counto: CountoModule,
                public counto2: CountoModule,
                public counto3: CountoModule,
                public counto4: CountoModule) {}

    ngAfterViewInit(): void {
    }

    goDown(): void {
        this.a.moveSectionDown();
    }
    changeCounter(): void {
        setTimeout(() => {
            this.timer ++;
            this.seconds = this.timer % 60;
            this.minutes = Math.floor(this.timer / 60);

            this.producedFrom = this.producedTo;
            this.producedTo += this.producedPerSecond;
            this.consumedFrom = this.consumedTo;
            this.consumedTo += this.consumedPerSecond;
            this.wastedFrom = this.wastedTo;
            this.wastedTo += this.wastedPerSecond;
        }, 670);
    }
}
