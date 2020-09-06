import {Component} from '@angular/core'
import {Observable} from 'rxjs'
import {ILegal} from '../../core/models/legal.interface'
import {
  ContentfulService,
  ContentTypeLegal,
} from '../../core/contentful/provider/contentful.service'

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.page.html',
  styleUrls: ['./imprint.page.scss'],
})
export class ImprintPage {
  public imprint$: Observable<ILegal>

  public translucentHeader: boolean

  constructor(private contentfulService: ContentfulService) {}

  public ionViewDidEnter() {
    this.imprint$ = this.contentfulService.getLegalEntry(
      ContentTypeLegal.IMPRINT
    )
  }

  public parseRichText(richText: any) {
    return this.contentfulService.parseRichText(richText)
  }
}
