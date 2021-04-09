import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionSectionComponent } from './acordion-section.component';

describe('AcordionSectionComponent', () => {
  let component: AcordionSectionComponent;
  let fixture: ComponentFixture<AcordionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
