import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.page.html',
  styleUrls: ['./client-login.page.scss'],
})
export class ClientLoginPage implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  validateString(value: string): boolean {
    if (!value || value.length < 0) {
      return false;
    }

    return true;
  }

  async login() {

    let loginSuccess: boolean = false;

    let errorMensaje: string = '';

    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      cssClass: 'custom-loading custom-loading-secondary',
      duration: 5000
    });

    loading.onWillDismiss().then(() => {
      if (!loginSuccess) {
        this.presentToast(errorMensaje, 'danger');
      }
    })

    await loading.present();

    if (!this.validateString(this.userName) || !this.validateString(this.password)) {
      errorMensaje = 'el nombre de usuario ni la contraseña pueden estar vacios.';
      await loading.dismiss();
      return;
    }

    this.navCtrl.navigateForward('dash-board').then(async () => {
      loginSuccess = true;
      await loading.dismiss();
    });
  }

  async presentToast(mensaje, color) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      color: color,
      duration: 3000,
      buttons: ['Ok']
    });
    toast.present();
  }

}
