import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShopManagerComponent } from './manage-shop-manager.component';

describe('ManageShopManagerComponent', () => {
  let component: ManageShopManagerComponent;
  let fixture: ComponentFixture<ManageShopManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageShopManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageShopManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
