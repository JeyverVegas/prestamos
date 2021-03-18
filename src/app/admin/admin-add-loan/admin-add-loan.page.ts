import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-add-loan',
  templateUrl: './admin-add-loan.page.html',
  styleUrls: ['./admin-add-loan.page.scss'],
})
export class AdminAddLoanPage implements OnInit {

  today = new Date();

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async accept() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Guardando Informacion.',
      cssClass: 'custom-loading custom-loading-secondary',
      duration: 3000
    });

    loading.onWillDismiss().then(() => {
      this.presentToast('El prestamo se ha guardado exitosamente.', 'secondary');
      this.modalCtrl.dismiss();
    })

    loading.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async presentToast(mensaje, color) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      color: color,
      mode: 'ios',
      duration: 3000,
      buttons: ['Ok']
    });
    toast.present();
  }

}
