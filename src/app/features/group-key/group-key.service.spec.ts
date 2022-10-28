import { TestBed } from '@angular/core/testing';

import { GroupKeyService } from './group-key.service';

describe('GroupKeyService', () => {
  let service: GroupKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
