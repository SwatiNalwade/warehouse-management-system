import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clientform } from './clientform';

describe('Clientform', () => {
  let component: Clientform;
  let fixture: ComponentFixture<Clientform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clientform],
    }).compileComponents();

    fixture = TestBed.createComponent(Clientform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
