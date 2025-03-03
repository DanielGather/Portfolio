import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-what-my-colleagues-say-about-me',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './what-my-colleagues-say-about-me.component.html',
  styleUrl: './what-my-colleagues-say-about-me.component.scss',
})
export class WhatMyColleaguesSayAboutMeComponent {
  activeIndex: number = 1;
  leftButtonIsClicked: boolean = false;
  rightButtonIsClicked: boolean = false;
  resetPosition: boolean = false;
  offset: number = 0;
  width: number = 798;

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

  moveLeft() {
    if (this.rightButtonIsClicked) {
      this.rightButtonIsClicked = false;
      this.resetPosition = true;
    } else if (!this.rightButtonIsClicked && this.resetPosition) {
      this.resetPosition = false;
      this.leftButtonIsClicked = true;
    }
    this.leftButtonIsClicked = true;
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  }

  moveRight() {
    if (this.leftButtonIsClicked) {
      this.leftButtonIsClicked = false;
      this.resetPosition = true;
    } else if (!this.leftButtonIsClicked && this.resetPosition) {
      this.resetPosition = false;
      this.rightButtonIsClicked = true;
    }
    this.rightButtonIsClicked = true;
    if (this.activeIndex < this.reviews.length - 1) {
      this.activeIndex += 1;
    }
  }

  pointerLeft() {
    this.rightButtonIsClicked = false;
    this.resetPosition = false;
    this.activeIndex--;
    this.leftButtonIsClicked = true;
  }

  pointerMiddle() {
    this.rightButtonIsClicked = false;
    this.leftButtonIsClicked = false;
    this.resetPosition = true;
    this.activeIndex = 1;
  }
  pointerRight() {
    this.leftButtonIsClicked = false;
    this.resetPosition = false;
    this.activeIndex++;
    this.rightButtonIsClicked = true;
  }
}
