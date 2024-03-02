import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { RoomComponent } from './pages/room/room.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { DashboardTemplateComponent } from './component/dashboard-template/dashboard-template.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      { 
        path: '', 
        children:[ 
          { path:'', component:HomeComponent},
          { path:'lesson',component:LessonComponent},
          { path:'teacher', component: TeacherComponent},
          { path:'room', component: RoomComponent},
          { path:'schedule', component: ScheduleComponent}
        ],
        component:DashboardTemplateComponent,
      },
      {
        path:'notfound',
        component: NotfoundComponent
      },
      {
        path:'**',
        redirectTo:'notfound'
      },
];
