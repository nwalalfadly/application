import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursComponent } from './jours.component';

describe('JoursComponent', () => {
  let component: JoursComponent;
  let fixture: ComponentFixture<JoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
