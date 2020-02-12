import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {ISocialLink} from '../../core/interfaces/social.interface';
import {SocialService} from '../../core/provider/social.service';

const {Browser} = Plugins;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactPage {

  public links: ISocialLink[];
  private linksSub: Subscription;

  constructor(private afs: AngularFirestore, private social: SocialService) {
  }

  public ionViewDidEnter() {
    this.linksSub = this.social.links$.subscribe(items => this.links = items);
  }

  public ionViewDidLeave() {
    if (this.linksSub) {
      this.linksSub.unsubscribe();
    }
  }

  public async openLink(link: ISocialLink) {
    await Browser.open({
      url: link.url
    });
  }
}
