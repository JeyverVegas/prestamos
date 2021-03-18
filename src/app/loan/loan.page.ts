import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowLoanPage } from '../show-loan/show-loan.page';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  show: 'active' | 'finish' = 'active';

  prestamos = [
    {
      description: 'Prestamo 1',
      value: 10000,
      interest: 11,
      period: 'Semanal',
      date: '18-03-2021',
      time: '6 Meses'
    },
    {
      description: 'Prestamo 2',
      value: 15000,
      interest: 8,
      period: 'Mensual',
      date: '15-03-2021',
      time: '4 Meses'
    },
    {
      description: 'Prestamo 3',
      value: 15000,
      interest: 15,
      period: 'Diario',
      date: '19-03-2021',
      time: '3 semanas'
    }
  ];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async showLoan(prestamo) {
    const modal = await this.modalCtrl.create({
      component: ShowLoanPage,
      componentProps: {
        loan: prestamo
      }
    });

    await modal.present();
  }

}
