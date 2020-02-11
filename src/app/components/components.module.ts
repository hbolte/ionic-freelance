import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SocialLinksComponent} from './social-links/social-links.component';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';


@NgModule({
  declarations: [
    SocialLinksComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SocialLinksComponent,
    SkeletonLoaderComponent
  ]
})
export class ComponentsModule {
}
