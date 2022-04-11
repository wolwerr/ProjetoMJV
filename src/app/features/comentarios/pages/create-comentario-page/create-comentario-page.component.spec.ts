import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComentarioPageComponent } from './create-comentario-page.component';

describe('CreateComentarioPageComponent', () => {
  let component: CreateComentarioPageComponent;
  let fixture: ComponentFixture<CreateComentarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComentarioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComentarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
