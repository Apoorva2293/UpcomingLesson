import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class UpcomingLessonService {
private url:string="";
events:any[];
  constructor() {}

  getEvents()
  {
    this.events=[{
      "title":"Nulla convallis dolor quis erat.",
      "description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "instructorName":"Erat Libero",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-03 22:00:00"
    },
    {
      "title":"Pellentesque sagittis porttitor tincidunt. Sed.",
      "description":"Curabitur eu velit vitae massa varius rhoncus. Proin eu ligula venenatis, consequat libero maximus, varius lorem. Morbi a dignissim nibh. Suspendisse eget ornare nunc, sollicitudin lacinia elit. Sed in volutpat.",
      "instructorName":"Scelerisque Via",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-01 21:00:00"
    },
    {
      "title":"Phasellus a interdum purus, non.",
      "description":"Pellentesque bibendum, nulla tincidunt consequat rutrum, sem lacus mattis quam, cursus semper lectus nibh id diam. Duis ullamcorper, odio ac blandit pretium, purus est varius ante, eu aliquam elit tortor.",
      "instructorName":"Cras Ac",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-04 21:00:00"
    },
    {
      "title":"Donec viverra, magna ut porttitor",
      "description":"Maecenas finibus ullamcorper aliquam. Integer eros neque, placerat id convallis non, rutrum tempor nisi. In venenatis vulputate feugiat. Vivamus porttitor, odio sit amet volutpat maximus, magna est maximus sapien, et.",
      "instructorName":"Posuere Una",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-03 20:00:00"
    },
    {
      "title":"In quis elit ut ipsum.",
      "description":"Praesent fermentum tortor non arcu imperdiet, egestas vestibulum augue tempus. Nunc sollicitudin tincidunt metus placerat luctus. Praesent at finibus nibh. Donec auctor feugiat hendrerit. Nulla massa augue, mattis quis fermentum.",
      "instructorName":"Aliquam Nisl",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-05 19:00:00"
    },
    {
      "title":"Ut consequat risus id lacus.",
      "description":"Nunc hendrerit blandit elit sed rhoncus. Sed interdum tempus enim vel ornare. Nulla facilisi. Morbi rhoncus turpis in justo sollicitudin, sit amet varius magna fringilla. Fusce porta magna neque, nec.",
      "instructorName":"Vestibulum Ante",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-05 22:00:00"
    },
    {
      "title":"Sed mauris dui, ornare ut.",
      "description":"Vivamus pulvinar, nisl fermentum cursus tincidunt, tortor justo dignissim metus, consectetur facilisis nulla tellus ut nisi. Cras in lorem neque. Vivamus sed odio in libero finibus consequat. Maecenas facilisis nisi.",
      "instructorName":"Integer Laciana",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-500,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-01 20:00:00"
    },
    {
      "title":"In hac habitasse platea dictumst.",
      "description":"Suspendisse consequat egestas posuere. Integer diam diam, gravida ac condimentum a, vulputate et quam. Fusce eleifend leo sed diam cursus, nec ultrices orci luctus. Vivamus eget eros aliquam, suscipit sapien.",
      "instructorName":"Ipsum Primis",
      "instructorPhotoUrl":"https://img.etimg.com/thumb/width-640,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "subjectPhotoUrl":"https://img.etimg.com/thumb/width-640,height-480,imgsize-38632,resizemode-1,msid-64575033/a-phd-degree-will-be-mandatory-for-teaching-positions-in-universities-from-july-2021.jpg",
      "time":"2016-01-03 21:00:00"
    }
    ];
    var eventInObservable = of(this.events);   
    return eventInObservable
    .pipe(
      map(items => items.map(item =>
       ({ date : [item.time.split(" ", 1)].toString(),
        ...item})as Object
      ))
    );          
  }
}
