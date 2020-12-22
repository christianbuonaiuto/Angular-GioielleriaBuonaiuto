import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaProfileComponent } from './personal-area-profile.component';

describe('PersonalAreaProfileComponent', () => {
  let component: PersonalAreaProfileComponent;
  let fixture: ComponentFixture<PersonalAreaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
