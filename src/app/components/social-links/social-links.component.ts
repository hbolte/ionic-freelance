import {Component, OnInit} from '@angular/core';
import {APP_CONFIG} from '../../core/config/app.config';
import {Plugins} from '@capacitor/core';

const {Browser} = Plugins;

export interface SocialMediaLink {
  icon: string;
  url: string;
  inToolbar: boolean;
}

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {

  public links: SocialMediaLink[];

  constructor() {
  }

  ngOnInit() {
    this.links = APP_CONFIG.socialLinks;
  }

  public async openLink(link: SocialMediaLink) {
    await Browser.open({
      url: link.url
    });
  }

}
