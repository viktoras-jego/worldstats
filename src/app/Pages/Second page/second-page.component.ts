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
    public cnt = 0.7;

    constructor(private a: MnFullpageService, private cdRef: ChangeDetectorRef, public counto: CountoModule) {
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

}
