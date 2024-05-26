import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent { 
  title = "Notification"
  data:any[] =[
    {
      id:1,
      title:'change time schedule angain',
      description:'set up perspiciatist nde comnis iste natus error sit voluptatem accusiantium dileremque laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam provident aliquam incidunt iure aut perferendis consequuntur iusto porro, cupiditate in repudiandae eos doloribus tenetur impedit. Obcaecati tenetur explicabo facilis.',
      sender:'Admin HCMUS',
      type:'Request',
      date:'20-01-2024',
      dateTime:'9:30'
    },
    {
      id:2,
      title:'sent new message',
      description:'set up perspiciatist nde comnis iste natus error sit voluptatem accusiantium dileremque laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      sender:'Darren Smith',
      type:'Message',
      date:'20-01-2024',
      dateTime:'9:30'
    },
    {
      id:1,
      title:'sent new message',
      description:'set up perspiciatist nde comnis iste.',
      sender:'Darren Smith',
      type:'Message',
      date:'20-01-2024',
      dateTime:'9:30'
    },
  ]

  classTest = false
  test(){
    console.log('run');
    this.classTest = !this.classTest 
  }
}
