import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ISocialLink} from '../../core/interfaces/social.interface';
import {Observable} from 'rxjs';

const {Browser} = Plugins;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactPage {

  public links$: Observable<ISocialLink[]>;

  constructor(private afs: AngularFirestore) {
  }

  public ionViewDidEnter() {
    this.links$ = this.afs.collection<ISocialLink>(
      'social',
      ref => ref.where('scope', '==', 'team'))
      .valueChanges()
  }

  public async openLink(link: ISocialLink) {
    await Browser.open({
      url: link.url
    });
  }
}
