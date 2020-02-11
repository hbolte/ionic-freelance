import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {ISocial} from '../../core/interfaces/social.interface';

const {Browser} = Plugins;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactPage {

  public links: ISocial[];
  private linksSub: Subscription;

  constructor(private afs: AngularFirestore) {
  }

  public ionViewDidEnter() {
    this.linksSub = this.afs.collection<ISocial>('social')
      .valueChanges().subscribe(data => {
        this.links = data;
      })
  }

  public ionViewDidLeave() {
    if (this.linksSub) {
      this.linksSub.unsubscribe();
    }
  }

  public async openLink(link: ISocial) {
    await Browser.open({
      url: link.url
    });
  }
}
