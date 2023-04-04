
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { EducationComponent } from './education/education.component';
import { CodingProfileComponent } from './coding-profile/coding-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';

const appRoute: Routes = [

  //   { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Banner', component: BannerComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Coding', component: CodingProfileComponent },
  { path: 'Workexp', component: WorkExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: NavbarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
