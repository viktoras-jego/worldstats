import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './Pages/First page/first-page.component';
import { SecondPageComponent } from './Pages/Second page/second-page.component';
import { BorderLineComponent } from './Shared/border-line.component';
import { BotBorderLineComponent } from './Shared/bot-border-line.component';
import { CountoModule } from 'angular2-counto';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    BorderLineComponent,
    BotBorderLineComponent,
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot(),
    CountoModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    BorderLineComponent,
    BotBorderLineComponent,
  ]
})
export class AppModule { }
