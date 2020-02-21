import {Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Observable} from 'rxjs';
import {ISocialLink} from '../../core/interfaces/social.interface';
import {AngularFirestore} from '@angular/fire/firestore';

const {Browser} = Plugins;

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {

  public links$: Observable<ISocialLink[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
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
