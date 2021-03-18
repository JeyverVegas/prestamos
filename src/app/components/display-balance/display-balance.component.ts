import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-balance',
  templateUrl: './display-balance.component.html',
  styleUrls: ['./display-balance.component.scss'],
})
export class DisplayBalanceComponent implements OnInit {

  @Input() value: number = 0;
  @Input() label: string = 'Saldo';
  @Input() profits: number = null;

  constructor() { }

  ngOnInit() { }

}
