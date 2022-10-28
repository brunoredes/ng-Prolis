import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProlegendsKeyGroup } from './interfaces/prolegends.interface';
import { proLegendsResult } from './mocks/dayOne.mock';

@Injectable({
  providedIn: 'any'
})
export class GroupKeyService {

  public getGroupKey(): Observable<ProlegendsKeyGroup[]> {
    return of(proLegendsResult);
  }

}
