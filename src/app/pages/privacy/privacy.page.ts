import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ISettings} from '../../core/interfaces/settings.interface';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage {

  public settings$: Observable<ISettings>;

  constructor(private afs: AngularFirestore) {
  }

  public ionViewDidEnter() {
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();
  }

}
