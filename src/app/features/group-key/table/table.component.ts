import { Component, Input, OnInit } from '@angular/core';
import { ProlegendsGameList } from '../interfaces/prolegends.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public gameList!: ProlegendsGameList[];
  constructor() { }

  ngOnInit(): void {
  }

}
