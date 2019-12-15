import { TestBed, inject } from '@angular/core/testing';

import { UpcomingLessonService } from './upcoming-lessons.service';

describe('UpcomingLessonService', () => {
  let service:UpcomingLessonService;
  beforeEach(() => {
    service=new UpcomingLessonService();
    TestBed.configureTestingModule({
      providers: [UpcomingLessonService]
    });
  });

  it('should call the service', inject([UpcomingLessonService], (service: UpcomingLessonService) => {
    expect(service.getEvents()).not.toBeNull();
  }));

  it('should return an element of length 8', inject([UpcomingLessonService], (service: UpcomingLessonService) => {
    service.getEvents().subscribe((data: any[]) => {
      expect(data.length).toBe(8);
  });
  }));

  it('should return response as expected', inject([UpcomingLessonService], (service: UpcomingLessonService) => {
    service.getEvents().subscribe((data: any[]) => {
      expect(data[0].title).toBe('Nulla convallis dolor quis erat.');
  });
  }));
});
