import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import {
  AngularIntersectionModule,
  IntersectionDirectivesModule,
  ROOT_MARGIN_FUTURE,
  ROOT_MARGIN_PAST,
  ROOT_MARGIN_PRESENT
} from '@mralexandernickel/ngx-intersection';
import { ScrollMotivationComponent } from './components/scroll-motivation/scroll-motivation.component';

@NgModule({
  declarations: [AppComponent, ScrollMotivationComponent],
  imports: [
    BrowserModule,
    AngularIntersectionModule,
    IntersectionDirectivesModule
  ],
  providers: [
    { provide: ROOT_MARGIN_FUTURE, useValue: '0%' },
    { provide: ROOT_MARGIN_PAST, useValue: '-10%' },
    { provide: ROOT_MARGIN_PRESENT, useValue: '-5%' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
