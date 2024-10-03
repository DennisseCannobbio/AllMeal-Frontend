import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMenuComponent } from './enviar-menu.component';

describe('EnviarMenuComponent', () => {
  let component: EnviarMenuComponent;
  let fixture: ComponentFixture<EnviarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviarMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
