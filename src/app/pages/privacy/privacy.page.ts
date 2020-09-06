import {Component, ViewEncapsulation} from '@angular/core'
import {Observable} from 'rxjs'
import {ILegal} from '../../core/models/legal.interface'
import {
  ContentfulService,
  ContentTypeLegal,
} from '../../core/contentful/provider/contentful.service'

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyPage {
  public policy$: Observable<ILegal>

  constructor(private contentfulService: ContentfulService) {}

  public ionViewDidEnter() {
    this.policy$ = this.contentfulService.getLegalEntry(
      ContentTypeLegal.PRIVACY
    )
  }

  public parseRichText(richText: any) {
    return this.contentfulService.parseRichText(richText)
  }
}
