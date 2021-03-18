import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AdminAddClientPage } from '../admin-add-client/admin-add-client.page';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.page.html',
  styleUrls: ['./admin-clients.page.scss'],
})
export class AdminClientsPage implements OnInit {

  clients = [
    {
      id: 1,
      name: 'Jeyver Vegas',
      image: '../../../assets/images/profile/user1.jpeg',
      created_at: new Date(),
      loans: [
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
      ]
    },
    {
      id: 2,
      name: 'Jesus Vicuña',
      image: '../../../assets/images/profile/user1.jpeg',
      created_at: new Date(),
      loans: [
        {
          description: 'Prestamo 2',
          value: 10000,
          interest: 20,
          period: 'Semanal',
          date: '18/03/2021',
          time: '6 Meses',
        }
      ]
    }
  ]

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  async addClient(client?) {
    
    const modal = await this.modalCtrl.create({
      component: AdminAddClientPage,
      componentProps: {
        id: client.id
      }
    });

    await modal.present();
  }

}
