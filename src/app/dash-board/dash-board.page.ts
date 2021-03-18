import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {

  prestamos = [
    {
      description: 'Prestamo 1',
      value: 10000,
      interest: 11,
      period: 'Semanal',
      date: '18/03/2021',
      time: '6 Meses'
    },
    {
      description: 'Prestamo 2',
      value: 15000,
      interest: 8,
      period: 'Mensual',
      date: '15/03/2021',
      time: '4 Meses'
    },
    {
      description: 'Prestamo 3',
      value: 15000,
      interest: 15,
      period: 'Diario',
      date: '19/03/2021',
      time: '3 semanas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  hello() {
    console.log('hola pueblo');
  }

}
