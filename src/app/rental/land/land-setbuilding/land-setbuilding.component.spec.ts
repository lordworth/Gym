import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSetbuildingComponent } from './land-setbuilding.component';

describe('LandSetbuildingComponent', () => {
  let component: LandSetbuildingComponent;
  let fixture: ComponentFixture<LandSetbuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSetbuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSetbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
