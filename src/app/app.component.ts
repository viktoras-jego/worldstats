import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./base.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{

  @ViewChild('fullpage')fullpage: ElementRef;

  constructor(private a: MnFullpageService) {

  }
  ngAfterViewInit(): void {
    this.a.moveSectionDown();
    /*setTimeout(() => {
      this.a.moveSectionDown();
    }, 5100);*/
  }

}
