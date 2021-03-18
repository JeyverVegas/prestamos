import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.page.html',
  styleUrls: ['./admin-dash-board.page.scss'],
})
export class AdminDashBoardPage implements OnInit {

  prestamos = [
    {
      description: 'Prestamo 1',
      value: 10000,
      interest: 11,
      period: 'Semanal',
      date: '18/03/2021',
      time: '6 Meses',
      user: {
        name: 'Jeyver Vegas'
      }
    },
    {
      description: 'Prestamo 2',
      value: 15000,
      interest: 8,
      period: 'Mensual',
      date: '15/03/2021',
      time: '4 Meses',
      user: {
        name: 'Jesus Vicuña'
      }
    },
    {
      description: 'Prestamo 3',
      value: 15000,
      interest: 15,
      period: 'Diario',
      date: '19/03/2021',
      time: '3 semanas',
      user: {
        name: 'Jeyver Vegas'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
