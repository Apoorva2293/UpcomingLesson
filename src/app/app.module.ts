import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { IgxGridModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingLessonService } from './upcoming-lessons/upcoming-lessons.service';
import { UpcomingOnlineLessonComponent } from './upcoming-lessons/upcoming-lessons.component';
import { IgxCardModule,IgxRippleModule,IgxDividerModule} from "igniteui-angular";
import { GroupByPipe } from './pipes/group-by-date-pipe.component';
import { MomentDatePipe } from './pipes/time-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingOnlineLessonComponent,
    GroupByPipe,
    MomentDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IgxGridModule,
    IgxCardModule,
    IgxRippleModule,
    IgxDividerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UpcomingLessonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
