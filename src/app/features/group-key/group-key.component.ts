import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroupKeyService } from './group-key.service';
import { ProlegendsKeyGroup } from './interfaces/prolegends.interface';
import { Subject, Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-group-key',
  templateUrl: './group-key.component.html',
  styleUrls: ['./group-key.component.scss']
})
export class GroupKeyComponent implements OnInit, OnDestroy {

  public groupKeyList!: ProlegendsKeyGroup[];
  private ngDestroyed: Subject<unknown> = new Subject<any>();

  constructor(private groupKeyService: GroupKeyService) { }

  ngOnInit(): void {
    this.groupKeyService.getGroupKey()
      .pipe(takeUntil(this.ngDestroyed))
      .subscribe(
        prolisData => this.groupKeyList = prolisData
      )
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next(true);
    this.ngDestroyed.complete();
  }

}
