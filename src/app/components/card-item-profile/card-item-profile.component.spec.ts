import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemProfileComponent } from './card-item-profile.component';

describe('CardItemProfileComponent', () => {
  let component: CardItemProfileComponent;
  let fixture: ComponentFixture<CardItemProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
