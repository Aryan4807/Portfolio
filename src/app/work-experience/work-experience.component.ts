import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  aboutMe: string[] = [
    `Using react js,
     operated on Cypress to generate the
screenshots for comparison and pair programmed to provide solutions and documents in windows`,
    `Created SplashScreen for the application Swiftchat introduced the
    animation feature for logo in app in an
optimized manner, created a quiz as a independent project to be used for evaluation of students.`,
    ` Delivery of goods in wholesale quantity at your doorstep. ,can form groups
to buy a particular product in bulk to avail discounts.`,
    `Register for its hostel with functionality to get a room allotted in a
particular hostel with furniture.
• Designed the ER diagrams taking 1 to many constraints in consideration as well as designing the front-end.`

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
