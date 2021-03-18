import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  welcomeFinish: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.welcomeFinish = true;
    }, 2000)
  }

  next(page: string) {
    this.navCtrl.navigateForward(page);
  }

}
