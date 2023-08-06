import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartConfiguration, ChartType, ChartOptions, ChartDataset } from 'chart.js';
import { ProveedorService } from '../../provides/proveedor.service';
import { Root2 } from '../../interfaces/lector';
// Define la interfaz para el tipo de gráfico
interface MyChart extends Chart {
  // Agrega cualquier propiedad personalizada que necesites aquí
}
@Component({
	selector: 'app-calltoaction',
	templateUrl: './calltoaction.component.html',
	styleUrls: ['./calltoaction.component.css']
  })
  
  export class CalltoactionComponent implements OnInit {
	public chart: MyChart | undefined; // Usa la interfaz que hemos definido
	public data1: Root2[] = [];

	constructor(private dataProvider: ProveedorService) {}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data1 = (response as Root2[]).slice(0, 100);
	  this.createChart();

    });
  }
  createChart() {
	const data: { [key: string]: number } = {}; // Creamos un diccionario para almacenar los datos
const label: { [key: string]: string } = {}; // Creamos un diccionario para almacenar los datos

// Llenamos los diccionarios 'data' y 'label' con los valores de 'home_team_goal' y 'home_team' respectivamente
this.data1.forEach((element) => {
	if (!data.hasOwnProperty(element.home_team)) {
	  data[element.home_team] = 0;
	}
	data[element.home_team] += element.home_team_goal;
  });
const keysArray: string[] = Object.keys(data);
const valuesArray: number[] = Object.values(data);


    const chartConfig: ChartConfiguration<ChartType, number[], string> = {
      type: 'bar', 
      data: {
        labels: keysArray,
        datasets: [
          {
            label: 'Goles en Casa',
			data : valuesArray,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(canvas, chartConfig) as MyChart; // Realiza una conversión de tipo a MyChart
  }
}


