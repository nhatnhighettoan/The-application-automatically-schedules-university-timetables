import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-generate',
  standalone: true,
  imports: [NgFor],
  templateUrl: './schedule-generate.component.html',
  styleUrl: './schedule-generate.component.css'
})
export class ScheduleGenerateComponent {
  title = 'Schedule Generate'
}
