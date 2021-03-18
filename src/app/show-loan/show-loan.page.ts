import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { loan } from 'src/interface';

@Component({
  selector: 'app-show-loan',
  templateUrl: './show-loan.page.html',
  styleUrls: ['./show-loan.page.scss'],
})
export class ShowLoanPage implements OnInit {

  @Input() loan: loan = null;

  finishDate = '18/09/2021';

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
