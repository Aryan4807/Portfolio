import { Component, OnInit } from '@angular/core';
import { education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  educationList: education[] = [
    {
      institute: "NIT DELHI",
      title: 'B.Tech',
      year: '2019-23',
      CGPA: " 8.3"
    },
    {
      institute: "ST. Marks",
      title: 'Secondary Highschool',
      year: '2017-19',
      CGPA: " 94%"
    },
    {
      institute: "ST. PAUL'S ",
      title: 'Highschool',
      year: '2017',
      CGPA: " 93%"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
