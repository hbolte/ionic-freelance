import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ContactPage} from './contact.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ContactPage}]),
    ComponentsModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {
}
