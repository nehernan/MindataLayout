import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListUserComponent } from './card-list-user.component';

describe('CardItemUserComponent', () => {
  let component: CardListUserComponent;
  let fixture: ComponentFixture<CardListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
