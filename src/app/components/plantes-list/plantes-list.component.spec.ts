import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesListComponent } from './plantes-list.component';

describe('PlantesListComponent', () => {
  let component: PlantesListComponent;
  let fixture: ComponentFixture<PlantesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
