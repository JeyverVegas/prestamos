import { Component, Input, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  @Input() color: string = "primary";

  @Input() title: string = null;

  @Input() options: boolean = false;

  @Input() backButton: boolean = false;

  @Input() admin: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  async openMenu(id?: string | null) {
    this.menuCtrl.enable(true, id);
    this.menuCtrl.open(id);
    //this.menuCtrl.toggle(id);
  }

  goBack() {
    this.navCtrl.pop();
  }

}
