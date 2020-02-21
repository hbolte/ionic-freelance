import {Component, Input} from '@angular/core';
import {IPersonal} from '../../../core/interfaces/personal.interface';
import {ModalController, Platform} from '@ionic/angular';
import {Observable} from 'rxjs';
import {ISocialLink} from '../../../core/interfaces/social.interface';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage {

  @Input()
  public person: IPersonal;

  public links$: Observable<ISocialLink[]>;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private modalController: ModalController, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.links$ = this.afs.collection<ISocialLink>(
      'social',
      ref => ref.where('scope', '==', this.person.id))
      .valueChanges()
  }

  public closeModal() {
    this.modalController.dismiss();
  }

}
