import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechComponent } from './modal-fech.component';

describe('ModalFechComponent', () => {
  let component: ModalFechComponent;
  let fixture: ComponentFixture<ModalFechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFechComponent]
    });
    fixture = TestBed.createComponent(ModalFechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
