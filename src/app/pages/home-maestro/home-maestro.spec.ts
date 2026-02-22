import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaestroComponent } from './home-maestro';

describe('HomeMaestro', () => {
  let component:  HomeMaestroComponent;
  let fixture: ComponentFixture< HomeMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent( HomeMaestroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
