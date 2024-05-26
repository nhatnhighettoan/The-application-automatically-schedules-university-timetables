import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopupComponent } from '../../component/popup/popup.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink,PopupComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  title = "Schedule"
  data : any[] = [
    {
      title : 'Lop Dai tra - Dai Cuong loremkemwrllsdmffsd[pfsdf sdf,s[d,fsd ',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai tra - Dai Cuong',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Chat Luong Cao',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Cu Nhan',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Tien Tien',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Lop Dai Tra - Chuyen Nganh',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
    {
      title : 'Data Science',
      semester : 1,
      semesterYearStart: 2020,
      semesterYearEnd: 2024 
    },
  ]
}
