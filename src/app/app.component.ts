import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./base.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  private scrolled: boolean = false;

  @ViewChild('fullpage')fullpage: ElementRef;

  constructor(private a: MnFullpageService) {

  }
  ngAfterViewInit(): void {
    this.disableZoom();
    this.a.moveTo(4);
    /*setTimeout(() => {
      this.moveDown();
    }, 4800);
    this.checkIfScrolled();*/
  }


  disableZoom(): void {
    $(document).keydown(function(event) {
      if (event.ctrlKey === true && (event.which === 61 ||
          event.which === 107 ||
          event.which === 173 ||
          event.which === 109 ||
          event.which === 87  ||
          event.which === 189  ) ) {
        event.preventDefault();
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/=
      }
    });
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
      if (event.ctrlKey === true) {
        event.preventDefault();
      }
    });
  }

  moveDown(): void {
    if (!this.scrolled) {
      this.a.moveTo(2);
    }
  }

  checkIfScrolled(): void {
    window.onwheel = (e) => {
      this.scrolled = true;
    };
  }

}
