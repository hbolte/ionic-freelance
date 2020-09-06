import {Component, ViewEncapsulation} from '@angular/core'
import {Observable} from 'rxjs'
import {IAuthor} from '../../core/models/personal.interface'
import {ContentfulService} from '../../core/contentful/provider/contentful.service'

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutPage {
  public author$: Observable<IAuthor>

  constructor(private contentfulService: ContentfulService) {}

  public ionViewDidEnter() {
    this.author$ = this.contentfulService.getAuthor()
  }

  public parseRichText(richText: any) {
    return this.contentfulService.parseRichText(richText)
  }
}
