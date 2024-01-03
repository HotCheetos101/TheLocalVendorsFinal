import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditItemComponent } from './vendor-edit-item.component';

describe('VendorEditItemComponent', () => {
  let component: VendorEditItemComponent;
  let fixture: ComponentFixture<VendorEditItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorEditItemComponent]
    });
    fixture = TestBed.createComponent(VendorEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
