import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PopupComponent } from '../../component/popup/popup.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [NgFor,PopupComponent,NgIf],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css',
  host: {ngSkipHydration: 'true'},
})
export class LessonComponent {
  title = 'Lesson Resource'
  columnsKey : any[] = [
    'STT',
    'Id',
    'Lesson',
    'Lesson Description',
    'Index',
    'Type',
    'Action'
  ]

  data : any[] = [
    {
      Id:'lesson1',
      lesson:'sinh',
      lessonDescription: 'mon hoc lien quan toi moi truong va dong vat',
      index: '4',
      type: 'ly thuyet',
    },
    {
      Id:'lesson12',
      lesson:'toan',
      lessonDescription: 'hieu kien thuc toan dai so',
      index: '3',
      type: 'ly thuyet',
    },
  ]
}
