import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ISettings} from '../../core/interfaces/settings.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.page.html',
  styleUrls: ['./imprint.page.scss'],
})
export class ImprintPage {

  public settings$: Observable<ISettings>;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();
  }

}
