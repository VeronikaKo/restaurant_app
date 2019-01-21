import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosetableComponent } from './choosetable.component';

describe('ChoosetableComponent', () => {
  let component: ChoosetableComponent;
  let fixture: ComponentFixture<ChoosetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
