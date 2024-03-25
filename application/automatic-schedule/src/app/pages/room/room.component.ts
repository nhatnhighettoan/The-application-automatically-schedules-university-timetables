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
    'Teacher',
    'Gender',
    'Falculty',
    'Birthday',
    'Address',
    'Email',
    'Phone',
    'Action'
  ]

  data : any[] = [
    {
      Id:'teacher001',
      Teacher:'nguyen van a',
      Gender: 'male',
      Falculty: 'Math',
      Birthday: '20/01/2002', 
      Address: 'lorem street',
      Email: 'lorem@gmail.com',
      Phone: '091234567',
    },
    {
      Id:'teacher002',
      Teacher:'nguyen van b',
      Gender: 'female',
      Falculty: 'Alogorythm',
      Birthday: '20/01/2001', 
      Address: 'lorem street',
      Email: 'lorem2@gmail.com',
      Phone: '091230567',
    },
  ]
}
