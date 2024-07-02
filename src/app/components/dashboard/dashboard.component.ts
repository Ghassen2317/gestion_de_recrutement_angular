import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  
  // Top cards
  totalApplications: number = 120; 
  preselectedCandidates: number = 35; 
  rejectedApplications: number = 45;

  // Bar chart
  barChart=new Chart({
    chart: {
      type: 'bar',
      backgroundColor:'#ffffff42',
    },
    title: {
      text: 'Selection par Experience'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Ans',
        data: [10,2,3,6,9,17,20,10,5,2,16],
        color: '#008080'
      } as any 
    ]

  })

  //pie chart
  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
      backgroundColor:'#ffffff42',
      
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Sexe',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          // { name: 'COVID 19', y: 1, color: '#eeeeee' },
  
          // { name: 'HIV/AIDS', y: 2, color: '#393e46' },
  
          // { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'Femme', y: 1, color: '#008080' },
          { name: 'Homme', y: 2, color: '#ffc600' },
        ],
      },
    ],
  })

  //LineChart
  lineChart=new Chart({
    chart: {
      type: 'line',
      backgroundColor:'#ffffff42',
    },
    title: {
      text: 'Selection par Age'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Age Candidats',
        data: [18,2,3,6,9,17,20,10,5,2,16],
        color: '#008080'
      } as any 
    ]

  })

}
