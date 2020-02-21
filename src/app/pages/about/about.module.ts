import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AboutPage} from './about.component';
import {ComponentsModule} from '../../components/components.module';
import {BioPageModule} from './bio/bio.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BioPageModule,
    RouterModule.forChild([{path: '', component: AboutPage}]),
    ComponentsModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {
}
