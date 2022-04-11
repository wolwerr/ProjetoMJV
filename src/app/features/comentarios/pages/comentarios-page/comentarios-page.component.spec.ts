import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPageComponent } from './comentarios-page.component';

describe('ComentariosPageComponent', () => {
  let component: ComentariosPageComponent;
  let fixture: ComponentFixture<ComentariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
