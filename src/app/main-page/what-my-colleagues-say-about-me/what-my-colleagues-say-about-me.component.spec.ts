import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMyColleaguesSayAboutMeComponent } from './what-my-colleagues-say-about-me.component';

describe('WhatMyColleaguesSayAboutMeComponent', () => {
  let component: WhatMyColleaguesSayAboutMeComponent;
  let fixture: ComponentFixture<WhatMyColleaguesSayAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatMyColleaguesSayAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatMyColleaguesSayAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
