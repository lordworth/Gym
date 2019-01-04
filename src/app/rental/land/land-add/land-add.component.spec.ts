import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAddComponent } from './land-add.component';

describe('LandAddComponent', () => {
  let component: LandAddComponent;
  let fixture: ComponentFixture<LandAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
