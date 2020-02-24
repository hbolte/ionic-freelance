import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {PrivacyPage} from './privacy.page';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: PrivacyPage}]),
    ComponentsModule
  ],
  declarations: [PrivacyPage]
})
export class PrivacyPageModule {
}
