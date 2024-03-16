import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [NgFor],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css'
})
export class ScheduleViewComponent {
  columnsKey : any[] = [
    'Lesson',
    'Class',
    'Time',
    'Room',
    'Teacher',
    'Location',
    'Type',
    'Action'
  ]

  data : any[] = [
    {
      lesson:'Math',
      class: '20TTH',
      timeStart: '7h30',
      timeEnd: '10h', 
      room: 'F204',
      teacher: 'lorem A nguyen',
      location: 'Linh Trung',
      type: 'Ly Thuyet'
    },
    {
      lesson:'Math 2',
      class: '20TTH',
      timeStart: '7h30',
      timeEnd: '10h', 
      room: 'F204',
      teacher: 'lorem A nguyen',
      location: 'Linh Trung',
      type: 'Ly Thuyet'
    }
  ]
}
