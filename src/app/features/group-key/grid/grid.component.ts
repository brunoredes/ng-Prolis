import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProlegendsGameList, ProlegendsKeyGroup } from '../interfaces/prolegends.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {

  @Input() public prolisList!: ProlegendsKeyGroup[];

  constructor() { }

  ngOnInit(): void {
  }

}
