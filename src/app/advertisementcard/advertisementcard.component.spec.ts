import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementcardComponent } from './advertisementcard.component';

describe('AdvertisementcardComponent', () => {
  let component: AdvertisementcardComponent;
  let fixture: ComponentFixture<AdvertisementcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
