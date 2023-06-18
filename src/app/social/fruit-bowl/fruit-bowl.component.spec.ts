import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBowlComponent } from './fruit-bowl.component';

describe('FruitBowlComponent', () => {
  let component: FruitBowlComponent;
  let fixture: ComponentFixture<FruitBowlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitBowlComponent]
    });
    fixture = TestBed.createComponent(FruitBowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
