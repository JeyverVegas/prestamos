import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-add-client',
  templateUrl: './admin-add-client.page.html',
  styleUrls: ['./admin-add-client.page.scss'],
})
export class AdminAddClientPage implements OnInit {

  @Input() id: number = null;

  user = null;

  username: string = '';
  password: string = '';
  name: string = '';
  address: string = '';

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async saveUser() {

    let success = false;

    let mensaje = null;

    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Guardando Informacion.',
      cssClass: 'custom-loading custom-loading-secondary',
      duration: 3000
    });

    loading.onWillDismiss().then(() => {
      if (!success) {
        this.presentToast(mensaje, 'danger');
        return;
      }

      mensaje = 'La informacion ha sido guardada exitosamente.';
      this.presentToast(mensaje, 'success');
    });

    await loading.present();

    if (!this.validateString(this.username) || !this.validateString(this.password)) {
      success = false;
      mensaje = 'el nombre de usuario ni la contraseña pueden estar vacios.';
      await loading.dismiss();
      return;
    }
    success = true;
  }

  validateString(value: string): boolean {
    if (!value || value.length < 0) {
      return false;
    }

    return true;
  }

  async presentToast(mensaje, color) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      mode: 'ios',
      color: color,
      duration: 3000,
      buttons: ['Ok']
    });
    toast.present();
  }

}
