import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingOnlineLessonComponent } from './upcoming-lessons/upcoming-lessons.component';

const routes: Routes = [
  {path:'upcoming-lessons', component:UpcomingOnlineLessonComponent},
  {path: '',redirectTo: '/upcoming-lessons',pathMatch: 'full'}   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
