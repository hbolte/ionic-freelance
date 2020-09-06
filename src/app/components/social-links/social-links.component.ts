import {Component, OnInit} from '@angular/core'
import {Plugins} from '@capacitor/core'
import {Observable} from 'rxjs'
import {ISocialLink} from '../../core/models/social.interface'
import {ContentfulService} from '../../core/contentful/provider/contentful.service'

const {Browser} = Plugins

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  public links$: Observable<ISocialLink[]>

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.links$ = this.contentfulService.getEntries('social')
  }

  public async openLink(link: ISocialLink) {
    await Browser.open({
      url: link.url,
    })
  }
}
