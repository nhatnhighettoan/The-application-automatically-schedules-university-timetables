import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ViewtableComponent } from '../../component/viewtable/viewtable.component';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [NgFor,ViewtableComponent],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css',
})
export class ScheduleViewComponent {
  title = 'Thoi Khoa Bieu Lop Dai Tra'
  columnsKey : any[] = [
    'STT',
    'Id',
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
      id:'mth201102',
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
      id:'mth201112',
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
