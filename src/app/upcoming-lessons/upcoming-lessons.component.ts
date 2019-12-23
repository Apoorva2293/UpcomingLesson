import { UpcomingLessonService } from './upcoming-lessons.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'upcoming-lessons',
  templateUrl: './upcoming-lessons.component.html',
  styleUrls: ['./upcoming-lessons.component.css']
})
export class UpcomingOnlineLessonComponent implements OnInit {
events:any[];
myEvents:any[];
location;
  constructor(private upcomingLessonService:UpcomingLessonService) { }

  ngOnInit() {
    this.upcomingLessonService.getEvents()

    .subscribe(item => this.events = item.sort((a: any, b: any) =>

    new Date(a.date).getTime() - new Date(b.date).getTime()

    ));
}
}
