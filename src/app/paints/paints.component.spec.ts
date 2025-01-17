import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintsComponent } from './paints.component';

describe('PaintsComponent', () => {
  let component: PaintsComponent;
  let fixture: ComponentFixture<PaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
