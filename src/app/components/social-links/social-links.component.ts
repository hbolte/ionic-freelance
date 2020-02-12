import {Component, OnDestroy, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {Subscription} from 'rxjs';
import {SocialService} from '../../core/provider/social.service';
import {ISocialLink} from '../../core/interfaces/social.interface';

const {Browser} = Plugins;

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit, OnDestroy {

  public links: ISocialLink[];
  private linksSub: Subscription;

  constructor(private social: SocialService) {
  }

  ngOnInit() {
    this.linksSub = this.social.links$.subscribe(items => this.links = items);
  }

  ngOnDestroy(): void {
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
