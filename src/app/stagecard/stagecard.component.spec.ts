import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagecardComponent } from './stagecard.component';

describe('StagecardComponent', () => {
  let component: StagecardComponent;
  let fixture: ComponentFixture<StagecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
