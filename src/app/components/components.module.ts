import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SocialLinksComponent} from './social-links/social-links.component';


@NgModule({
  declarations: [
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SocialLinksComponent
  ]
})
export class ComponentsModule {
}
