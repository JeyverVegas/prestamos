import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private loadingCtrl: LoadingController,
    private navtCtrl: NavController
  ) { }

  async logOut() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      message: 'Cerrando Sesion.',
      cssClass: 'custom-loading custom-loading-secondary',
      duration: 3000
    });

    loading.onWillDismiss().then(() => {
      this.navtCtrl.navigateRoot('home');
    })

    await loading.present();
  }
}
