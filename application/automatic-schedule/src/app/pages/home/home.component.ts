import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgClass,NgxChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: { ngSkipHydration: 'true' },
})
export class HomeComponent {
  dataPC = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ]
  viewPC: [number, number] = [800, 300];
  animationPC = true;
  colorSchemePC = "vivid";
  legendVBC = true;
  labelsPC = true;
  doughnut = true;

  percentageFormatterPC(data: any): string {
    return data.value + "%";
  }
}
