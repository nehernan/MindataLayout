import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLinkIconComponent } from './btn-link-icon.component';

describe('BtnLinkIconComponent', () => {
  let component: BtnLinkIconComponent;
  let fixture: ComponentFixture<BtnLinkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLinkIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLinkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
