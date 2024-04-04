import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {
  title = "Request"
  columnsKey : any[] = [
    'STT',
    'Id',
    'request',
    'request Description',
    'time',
    'date',
    'status',
    'Action'
  ]

  statusColor = {
    Wait: 'bg-gray-400',
    Accept: 'bg-green-400',
    Reject: 'bg-red-400',
    Cancel: 'bg-orange-400'
  }

  data : any[] = [
    {
      Id:'request01',
      request:'lorem request oo1oasd',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h30p',
      date: '20/05/2002', 
      status: 'Wait',
    },
    {
      Id:'request02',
      request:'lorem request asdaosdihoi',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h40p',
      date: '20/05/2002', 
      status: 'Accept',
    },
    {
      Id:'request03',
      request:'lorem request oo1oasd',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h30p',
      date: '20/05/2002', 
      status: 'Wait',
    },
    {
      Id:'request04',
      request:'lorem request asdaosdihoi',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h40p',
      date: '20/05/2002', 
      status: 'Accept',
    },
    {
      Id:'request05',
      request:'lorem request oo1oasd',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h30p',
      date: '20/05/2002', 
      status: 'Reject',
    },
    {
      Id:'request06',
      request:'lorem request asdaosdihoi',
      requestDescription: 'lorem request to give salkdalsdk aslkdnjasl',
      time: '12h40p',
      date: '20/05/2002', 
      status: 'Cancel',
    },
  ]
}
