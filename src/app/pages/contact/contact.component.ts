import {Component} from '@angular/core';
import {APP_CONFIG} from '../../core/config/app.config';
import {Plugins} from '@capacitor/core';
import {SocialMediaLink} from '../../components/social-links/social-links.component';

const {Browser} = Plugins;

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  inToolbar: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactPage {

  public links: SocialLink[];

  constructor() {
    this.links = APP_CONFIG.socialLinks;
  }

  public async openLink(link: SocialMediaLink) {
    await Browser.open({
      url: link.url
    });
  }

}
