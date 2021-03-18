import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {

  @Input() value: number = 0;
  @Input() description: string = null;
  @Input() userName: string = null;

  constructor() { }

  ngOnInit() { }

}
