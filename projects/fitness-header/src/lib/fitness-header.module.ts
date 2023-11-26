import { NgModule } from '@angular/core';
import { FitnessHeaderComponent } from './fitness-header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    FitnessHeaderComponent,
    SocialMediaComponent,
    UserComponent,
    WelcomeComponent
  ],
  imports: [
  ],
  exports: [
    FitnessHeaderComponent
  ]
})
export class FitnessHeaderModule { }
