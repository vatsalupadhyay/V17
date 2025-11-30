import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @ViewChild('growthChart', { static: false }) chartRef!: ElementRef<HTMLCanvasElement>;

  chartData: any = null;
  chart: any;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.dataService.getChartData().subscribe({
      next: (data) => {
        this.chartData = data.growthChart;
        this.createChart();
      },
      error: (error) => {
        this.errorMessage = 'Failed to load chart data';
        console.error('Error loading chart data:', error);
      }
    });
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    if (!this.chartRef) {
      setTimeout(() => this.createChart(), 100);
      return;
    }

    const ctx = this.chartRef.nativeElement.getContext('2d');

    this.chart = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          label: 'TWh (Terawatt-hours)',
          data: this.chartData.data,
          backgroundColor: [
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          title: {
            display: true,
            text: this.chartData.title,
            font: {
              size: 18
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'TWh'
            }
          }
        }
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
