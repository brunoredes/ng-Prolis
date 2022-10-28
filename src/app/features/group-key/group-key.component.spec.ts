import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupKeyComponent } from './group-key.component';

describe('GroupKeyComponent', () => {
  let component: GroupKeyComponent;
  let fixture: ComponentFixture<GroupKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
