import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('firstNameInput') firstName: ElementRef;
  @ViewChild('lastNameInput') lastName: ElementRef;

  result: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.result = this.firstName.nativeElement.value + this.lastName.nativeElement.value;
  }
}
