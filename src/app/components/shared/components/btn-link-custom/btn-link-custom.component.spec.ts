import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLinkCustomComponent } from './btn-link-custom.component';

describe('BtnLinkCustomComponent', () => {
  let component: BtnLinkCustomComponent;
  let fixture: ComponentFixture<BtnLinkCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLinkCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLinkCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
