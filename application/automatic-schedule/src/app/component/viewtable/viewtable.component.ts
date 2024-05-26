import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewtable',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,RouterLink],
  templateUrl: './viewtable.component.html',
  styleUrl: './viewtable.component.css',
  host: {ngSkipHydration: 'true'},
})
export class ViewtableComponent {
  // PROPERTY
  openViewtable = false
  openAdvantageSearchTable = false
  weekDay = [
    'monday_day',
    'monday_night',
    'tuesday_day',
    'tuesday_night',
    'wednesday_day',
    'wednesday_night',
    'thursday_day',
    'thursday_night',
    'friday_day',
    'friday_night',
    'saturday_day',
    'saturday_night',
    'sunday_day',
    'sunday_night',
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

  onToggleAdvantageSearchTable(){
    this.openAdvantageSearchTable = !this.openAdvantageSearchTable
  }

  slicePatternWithComma(text : string, comma:string){
    const words = text.split(comma)
    return words
  }
}
