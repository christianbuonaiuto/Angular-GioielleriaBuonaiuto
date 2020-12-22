import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaOrderListComponent } from './personal-area-order-list.component';

describe('PersonalAreaOrderListComponent', () => {
  let component: PersonalAreaOrderListComponent;
  let fixture: ComponentFixture<PersonalAreaOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
