import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public days: { day: string; path: string }[] = [
    { day: 'Dia 1 - Grupos', path: 'dia-1' },
    { day: 'Dia 2 - Winner', path: 'dia-2' },
    { day: 'Dia 3 - Lower', path: 'dia-3' },
    { day: 'Dia 4 - Winner', path: 'dia-4' },
    { day: 'Dia 5 - Lower', path: 'dia-5' },
    { day: 'Dia 6 - Winner', path: 'dia-6' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
