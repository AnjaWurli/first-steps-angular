import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBasketComponent } from './fruit-basket.component';

describe('FruitBasketComponent', () => {
  let component: FruitBasketComponent;
  let fixture: ComponentFixture<FruitBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitBasketComponent]
    });
    fixture = TestBed.createComponent(FruitBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
