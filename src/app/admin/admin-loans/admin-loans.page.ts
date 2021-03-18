import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ShowLoanPage } from 'src/app/show-loan/show-loan.page';
import { AdminAddLoanPage } from '../admin-add-loan/admin-add-loan.page';

@Component({
  selector: 'app-admin-loans',
  templateUrl: './admin-loans.page.html',
  styleUrls: ['./admin-loans.page.scss'],
})
export class AdminLoansPage implements OnInit {

  show: 'active' | 'finish' = 'active';

  prestamos = [
    {
      description: 'Prestamo 1',
      value: 10000,
      interest: 11,
      period: 'Semanal',
      date: '18-03-2021',
      time: '6 Meses',
      user: {
        id: 1,
        name: 'Jeyver Vegas',
        image: '../../../assets/images/profile/user1.jpeg',
        created_at: new Date(),
      }
    },
    {
      description: 'Prestamo 2',
      value: 15000,
      interest: 8,
      period: 'Mensual',
      date: '15-03-2021',
      time: '4 Meses',
      user: {
        id: 2,
        name: 'Jesus Vicuña',
        image: '../../../assets/images/profile/user1.jpeg',
        created_at: new Date(),
      }
    },
    {
      description: 'Prestamo 3',
      value: 15000,
      interest: 15,
      period: 'Diario',
      date: '19-03-2021',
      time: '3 semanas',
      user: {
        id: 1,
        name: 'Jeyver Vegas',
        image: '../../../assets/images/profile/user1.jpeg',
        created_at: new Date(),
      }
    }
  ];

  constructor(
    private navCtrl: NavController,
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

    modal.present();
  }

  async addLoan() {
    const modal = await this.modalCtrl.create({
      component: AdminAddLoanPage
    });

    modal.present();
  }

  goBack() {
    this.navCtrl.back();
  }

}
