import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewtable',
  standalone: true,
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './viewtable.component.html',
  styleUrl: './viewtable.component.css',
  host: {ngSkipHydration: 'true'},
})
export class ViewtableComponent {
  // PROPERTY
  closeViewtable = false
  weekDay = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ]

  courses = [
    {
      ID: 1,
      name: 'c program 2',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'tuesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'tuesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'saturday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'saturday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'tuesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'tuesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'wednesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'tuesday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },    {
      ID: 1,
      name: 'c program 2',
      day: 'thursday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 2,
      name: 'c program 3',
      day: 'sunday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    },
    {
      ID: 3,
      name: 'c program 1',
      day: 'friday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'lorem teacher'
    }
  ]

  // METHOD
  onCloseViewtable(){
    this.closeViewtable = true
  }

  onOpenViewtable(){
    this.closeViewtable = false    
  }
}
