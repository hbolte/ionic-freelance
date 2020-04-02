import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SocialLinksComponent} from './social-links/social-links.component';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';
import {DocPipe} from '../core/pipes/doc.pipe';


@NgModule({
  declarations: [
    SocialLinksComponent,
    SkeletonLoaderComponent,
    DocPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SocialLinksComponent,
    SkeletonLoaderComponent,
    DocPipe
  ]
})
export class ComponentsModule {
}
