import {
    AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TimelineMax, Back, Power2 } from 'gsap';
import { MnFullpageService } from 'ngx-fullpage';
import { CountoModule } from 'angular2-counto';

@Component({
    selector: 'app-eight-page',
    templateUrl: './eight-page.template.html',
    styleUrls: ['../../base.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EightPageComponent implements AfterViewInit {

    public seconds: number = 0;
    public minutes: number = 0;
    public duration = 0.3;

    public dieselFrom = 0;
    public energyFrom = 0;
    public fertilizerFrom = 0;
    public waterFrom = 0;

    public dieselPerSecond = 3.747;
    public energyPerSecond = 92.622;
    public fertilizerPerSecond = 5.563;
    public waterPerSecond = 84290.239;

    public dieselTo = this.dieselPerSecond;
    public energyTo = this.energyPerSecond;
    public fertilizerTo = this.fertilizerPerSecond;
    public waterTo = this.waterPerSecond;

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

            this.dieselFrom = this.dieselTo;
            this.dieselTo += this.dieselPerSecond;
            this.energyFrom = this.energyTo;
            this.energyTo += this.energyPerSecond;
            this.fertilizerFrom = this.fertilizerTo;
            this.fertilizerTo += this.fertilizerPerSecond;
            this.waterFrom = this.waterTo;
            this.waterTo += this.waterPerSecond;
        }, 670);
    }
}
