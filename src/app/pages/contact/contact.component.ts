import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ISocialLink} from '../../core/models/social.interface';
import {Observable} from 'rxjs';
import {ContentfulService} from '../../core/contentful/provider/contentful.service';

const {Browser} = Plugins;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactPage {

  public links$: Observable<ISocialLink[]>;

  constructor(private contentfulService: ContentfulService) {
  }

  public ionViewDidEnter() {
    this.links$ = this.contentfulService.getEntries('social');
  }

  public async openLink(link: ISocialLink) {
    await Browser.open({
      url: link.url
    });
  }
}
