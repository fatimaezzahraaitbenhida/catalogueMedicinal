import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlantesComponent } from './search-plantes.component';

describe('SearchPlantesComponent', () => {
  let component: SearchPlantesComponent;
  let fixture: ComponentFixture<SearchPlantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPlantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPlantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
