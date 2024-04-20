import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGenerateComponent } from './schedule-generate.component';

describe('ScheduleGenerateComponent', () => {
  let component: ScheduleGenerateComponent;
  let fixture: ComponentFixture<ScheduleGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleGenerateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
