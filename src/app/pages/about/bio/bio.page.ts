import {Component, Input} from '@angular/core';
import {IPersonal} from '../../../core/interfaces/personal.interface';
import {ModalController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage {

  @Input()
  public person: IPersonal;

  public translucentHeader: boolean;

  constructor(private modalController: ModalController, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public closeModal() {
    this.modalController.dismiss();
  }

}
