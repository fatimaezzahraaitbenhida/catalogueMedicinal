import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesDetailComponent } from './plante-details.component';

describe('PlanteDetailsComponent', () => {
  let component: PlantesDetailComponent;
  let fixture: ComponentFixture<PlantesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
