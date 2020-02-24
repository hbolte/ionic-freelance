import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ISettings} from '../../core/interfaces/settings.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {

  public settings$: Observable<ISettings>;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();
  }

}
