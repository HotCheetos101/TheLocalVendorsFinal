import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDeleteItemComponent } from './vendor-delete-item.component';

describe('VendorDeleteItemComponent', () => {
  let component: VendorDeleteItemComponent;
  let fixture: ComponentFixture<VendorDeleteItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorDeleteItemComponent]
    });
    fixture = TestBed.createComponent(VendorDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
