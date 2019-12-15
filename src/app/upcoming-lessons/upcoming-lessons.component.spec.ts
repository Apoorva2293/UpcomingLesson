import { ComponentFixture } from '@angular/core/testing';
import { UpcomingOnlineLessonComponent } from './upcoming-lessons.component';
import { UpcomingLessonService } from "./upcoming-lessons.service";


describe('UpcomingOnlineLessonComponent', () => {
  let component: UpcomingOnlineLessonComponent;
  let service:UpcomingLessonService;
  let fixture: ComponentFixture<UpcomingOnlineLessonComponent>;


  beforeEach(() => {
    service=new UpcomingLessonService();
    component=new UpcomingOnlineLessonComponent(service);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set events property with items returned from server', () => {    
    component.ngOnInit();
    expect(component.events.length).toBe(8);
  });
});
