import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBeginningComponent } from './the-beginning.component';

describe('TheBeginningComponent', () => {
  let component: TheBeginningComponent;
  let fixture: ComponentFixture<TheBeginningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBeginningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
