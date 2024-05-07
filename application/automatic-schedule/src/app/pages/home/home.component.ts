import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent implements OnInit {
  public chart: any;

  createChart() {
    this.chart = new Chart('Mychart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 10
        }]
      },

      options: {
        plugins: {
          legend: {
            position: 'bottom' // Set the legend position to 'bottom'
          }
        }
      }
    });
  }

  ngOnInit(): void {
    console.log('giahao');
    this.createChart();
  }
}
