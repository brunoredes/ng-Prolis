import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public days: string[] = [
    'Dia 1 - Grupos',
    'Dia 2 - Winner',
    'Dia 3 - Lower',
    'Dia 4 - Winner',
    'Dia 5 - Lower',
    'Dia 6 - Winner'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
