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
  openViewtable = false
  weekDay = [
    'monday',
    'monday 2',
    'tuesday',
    'tuesday 2',
    'wednesday',
    'wednesday 2',
    'thursday',
    'thursday 2',
    'friday',
    'friday 2',
    'saturday',
    'saturday 2',
    'sunday',
    'sunday 2',
  ]

  courses = [
    {
      ID: 1,
      name: 'xu ly bien hinh va xu ly anh',
      day: 'monday',
      timeStart: '9h',
      timeEnd: '10h',
      address: 'Linh Trung',
      room: 'E304',
      teacher:'vo tran gia haoooo'
    },
    {
      ID: 2,
      name: 'hoa dai cuong 2',
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
    this.openViewtable = false
  }

  onOpenViewtable(){
    this.openViewtable = true    
  }
}
