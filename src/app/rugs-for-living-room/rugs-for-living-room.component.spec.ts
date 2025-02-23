import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RugsForLivingRoomComponent } from './rugs-for-living-room.component';

describe('RugsForLivingRoomComponent', () => {
  let component: RugsForLivingRoomComponent;
  let fixture: ComponentFixture<RugsForLivingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RugsForLivingRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RugsForLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
