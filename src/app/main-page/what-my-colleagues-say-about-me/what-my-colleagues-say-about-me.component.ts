import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-what-my-colleagues-say-about-me',
  imports: [NgClass, NgStyle, TranslateModule, NgFor],
  templateUrl: './what-my-colleagues-say-about-me.component.html',
  styleUrl: './what-my-colleagues-say-about-me.component.scss',
})
export class WhatMyColleaguesSayAboutMeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @ViewChild('pointLeft') pointLeft!: ElementRef;
  @ViewChild('pointMiddle') pointMiddle!: ElementRef;
  @ViewChild('pointRight') pointRight!: ElementRef;

  activeIndex: number = 1;
  leftButtonIsClicked: boolean = false;
  rightButtonIsClicked: boolean = false;
  resetPosition: boolean = false;
  offset: number = 0;
  width: number = 798;

  reviews = [
    {
      text: 'Daniel has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the succcess of our project.',
      name: 'R.Bongartz',
      role: 'Team Partner',
    },
    {
      text: 'asdajskdqwiejqiwje asdjkajdkqiejk aksdjkdqjwiasdajdq',
      name: 'P.Pansen',
      role: 'Developer',
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
      this.handlePointerColor('pointMiddle');
    } else if (!this.rightButtonIsClicked && this.resetPosition) {
      this.resetPosition = false;
      this.leftButtonIsClicked = true;
      this.handlePointerColor('pointLeft');
    } else if (
      !this.leftButtonIsClicked &&
      !this.rightButtonIsClicked &&
      !this.resetPosition
    ) {
      this.leftButtonIsClicked = true;
      this.handlePointerColor('pointLeft');
    }
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  }

  moveRight() {
    if (this.leftButtonIsClicked) {
      this.leftButtonIsClicked = false;
      this.resetPosition = true;
      this.handlePointerColor('pointMiddle');
    } else if (!this.leftButtonIsClicked && this.resetPosition) {
      this.resetPosition = false;
      this.rightButtonIsClicked = true;
      this.handlePointerColor('pointRight');
    } else if (
      !this.resetPosition &&
      !this.leftButtonIsClicked &&
      !this.rightButtonIsClicked
    ) {
      this.handlePointerColor('pointRight');
      this.rightButtonIsClicked = true;
    }
    if (this.activeIndex < this.reviews.length - 1) {
      this.activeIndex += 1;
    }
  }

  pointerLeft(event: Event, point: string) {
    this.handlePointerColor(point);
    this.resetPosition = false;
    if (this.rightButtonIsClicked) {
      this.activeIndex -= 2;
    } else {
      this.activeIndex--;
    }
    this.rightButtonIsClicked = false;
    this.leftButtonIsClicked = true;
  }

  pointerMiddle(event: Event, point: string) {
    this.handlePointerColor(point);
    this.rightButtonIsClicked = false;
    this.leftButtonIsClicked = false;
    this.resetPosition = true;
    this.activeIndex = 1;
  }
  /*************  ✨ Codeium Command 🌟  *************/
  pointerRight(event: Event, point: string) {
    this.handlePointerColor(point);
    this.resetPosition = false;
    if (this.leftButtonIsClicked) {
      this.activeIndex += 2;
    } else {
      this.activeIndex++;
    }
    this.leftButtonIsClicked = false;
    this.rightButtonIsClicked = true;
  }
  /******  145370a1-d6ae-4ef9-a3f2-634c98ebf436  *******/
  handlePointerColor(point: string) {
    this.removePointFillColor();
    let currentPoint = this.changeColor(point);
    this.renderer.setStyle(currentPoint?.nativeElement, 'fill', '#3dcfb6');
  }

  changeColor(point: string) {
    return point === 'pointLeft'
      ? this.pointLeft
      : point === 'pointRight'
      ? this.pointRight
      : point === 'pointMiddle'
      ? this.pointMiddle
      : null;
  }

  removePointFillColor() {
    const allCircle = this.el.nativeElement.querySelectorAll('circle');
    allCircle.forEach((circle: HTMLElement) =>
      this.renderer.setStyle(circle, 'fill', 'white')
    );
  }
}
