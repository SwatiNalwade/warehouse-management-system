import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Clientlist } from './clientlist';

describe('Clientlist', () => {
  let component: Clientlist;
  let fixture: ComponentFixture<Clientlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clientlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Clientlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
