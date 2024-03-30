import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [NgFor],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  title = 'Room Resource'
  columnsKey : any[] = [
    'STT',
    'Id',
    'Room',
    'Room Description',
    'Location',
    'Capacity',
    'Type',
    'Action'
  ]

  data : any[] = [
    {
      Id:'room001',
      room:'F023',
      roomDescription: 'Phong hoi truong',
      location: 'NVC',
      capacity: '150', 
      type: 'ly thuyet',
    },
    {
      Id:'room002',
      room:'F033',
      roomDescription: 'Phong may tinh',
      location: 'Linh Trung',
      capacity: '100', 
      type: 'thuc hanh',
    },
  ]
}
