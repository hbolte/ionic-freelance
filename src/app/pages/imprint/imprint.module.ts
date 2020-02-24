import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ImprintPage} from './imprint.page';
import {ComponentsModule} from '../../components/components.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: ImprintPage}]),
    ComponentsModule
  ],
  declarations: [ImprintPage]
})
export class ImprintPageModule {
}
