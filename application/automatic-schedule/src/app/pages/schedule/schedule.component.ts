import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  data : any[] = [
    {
      title : 'Mathematic And Computer Science',
      scheduleNumber : 10, 
    },
    {
      title : 'Biology',
      scheduleNumber : 10, 
    },
    {
      title : 'Computer Science',
      scheduleNumber : 10, 
    },
    {
      title : 'Mathematic',
      scheduleNumber : 10, 
    },
    {
      title : 'Physic And Computer Science',
      scheduleNumber : 10, 
    },
    {
      title : 'Data Science',
      scheduleNumber : 10, 
    },
  ]
}
