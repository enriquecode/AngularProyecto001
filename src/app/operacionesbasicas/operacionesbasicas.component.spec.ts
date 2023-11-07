import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesbasicasComponent } from './operacionesbasicas.component';

describe('OperacionesbasicasComponent', () => {
  let component: OperacionesbasicasComponent;
  let fixture: ComponentFixture<OperacionesbasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesbasicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesbasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
