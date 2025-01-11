import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultslistComponent } from './resultslist.component';

describe('ResultslistComponent', () => {
  let component: ResultslistComponent;
  let fixture: ComponentFixture<ResultslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
