import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './Pages/First page/first-page.component';
import { SecondPageComponent } from './Pages/Second page/second-page.component';
import { MnFullpageModule } from 'ngx-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
      MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ]
})
export class AppModule { }
