import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power2 } from 'gsap';
import { MnFullpageService } from 'ngx-fullpage';
import { CountoModule } from 'angular2-counto';

@Component({
    selector: 'app-forth-page',
    templateUrl: './forth-page.template.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ForthPageComponent implements AfterViewInit {

    public seconds: number = 0;
    public minutes: number = 0;
    public duration = 0.3;

    public goldWasteFrom = 0;

    public goldWastePerSecond = 236.808726;

    public goldWasteTo = this.goldWastePerSecond;

    public timer = 0;

    constructor(private a: MnFullpageService,
                private cdRef: ChangeDetectorRef,
                public counto: CountoModule,
                public counto2: CountoModule,) {}

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

            this.goldWasteFrom = this.goldWasteTo;
            this.goldWasteTo += this.goldWastePerSecond;
        }, 670);
    }
}
