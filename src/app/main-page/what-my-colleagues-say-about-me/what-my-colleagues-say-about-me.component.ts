import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-what-my-colleagues-say-about-me',
  standalone: true,
  imports: [NgClass],
  templateUrl: './what-my-colleagues-say-about-me.component.html',
  styleUrl: './what-my-colleagues-say-about-me.component.scss',
})
export class WhatMyColleaguesSayAboutMeComponent {
  reviews = [
    {
      text: 'Daniel has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the succcess of our project.',
      name: 'Rodger Bongartz',
      role: 'Team Partner',
    },
    {
      text: 'asdajskdqwiejqiwje asdjkajdkqiejk aksdjkdqjwiasdajdq',
      name: 'Peter Pansen',
      role: 'Senior Frontend Developer',
    },
    {
      text: 'Daniel has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the succcess of our project.',
      name: 'Babsi',
      role: 'Head of All',
    },
  ];

  focus: boolean = true;
}
