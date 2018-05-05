
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PttDashboardComponent } from './ptt-dashboard.component';

describe('PttDashboardComponent', () => {
  let component: PttDashboardComponent;
  let fixture: ComponentFixture<PttDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PttDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PttDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
