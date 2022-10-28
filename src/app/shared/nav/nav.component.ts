import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public days: string[] = [
    'Dia 1 - Grupos',
    'Dia 2 - Winner',
    'Dia 3 - Lower',
    'Dia 4 - Winner',
    'Dia 5 - Lower',
    'Dia 6 - Winner'
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
