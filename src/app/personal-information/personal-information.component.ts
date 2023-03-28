import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  title = 'Aryan Gupta';
  profession = " Web Developer"
  constructor() { }

  ngOnInit(): void {
    // var option = {
    //   string: ['', 'Angular', 'Web'],
    //   typeSpeed: 120,
    //   backSpeed: 100,
    //   loop: true
    // };
    // var typed = new Typed('.typed', option);
    // typed.reset();
  }

}
