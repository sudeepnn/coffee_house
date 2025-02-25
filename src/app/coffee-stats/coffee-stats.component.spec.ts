import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeStatsComponent } from './coffee-stats.component';

describe('CoffeeStatsComponent', () => {
  let component: CoffeeStatsComponent;
  let fixture: ComponentFixture<CoffeeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
