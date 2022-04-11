import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetailsPageComponent } from './comentario-details-page.component';

describe('ComentarioDetailsPageComponent', () => {
  let component: ComentarioDetailsPageComponent;
  let fixture: ComponentFixture<ComentarioDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
