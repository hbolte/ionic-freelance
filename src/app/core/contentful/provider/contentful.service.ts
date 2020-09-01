import {Inject, Injectable} from '@angular/core';
import {ContentfulCollection, createClient} from 'contentful';
import {ContentfulConfigService} from './contentful-config.service';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

export enum ContentTypeLegal {
  IMPRINT = 'imprint',
  PRIVACY = 'privacy-policy'
}

@Injectable()
export class ContentfulService {
  private client;

  constructor(@Inject(ContentfulConfigService) private config) {
    this.initClient();
  }

  private initClient() {
    this.client = createClient({
      space: this.config.spaceId,
      accessToken: this.config.accessToken
    });
  }

  public getEntries(contentType: string, query?: any): Observable<any> {
    return from(
      this.client.getEntries(Object.assign({
        content_type: contentType
      }, query))
    ).pipe(map((collection: ContentfulCollection<any>) => {
      return collection.items.map(item => {
        return item.fields;
      });
    }));
  }

  public getLegalEntry(legalType: ContentTypeLegal, query?: any): Observable<any> {
    return from(
      this.client.getEntries(Object.assign({
        content_type: 'legal',
        'fields.slug[in]': legalType
      }, query))
    ).pipe(map((collection: ContentfulCollection<any>) => {
      return collection.items[0].fields;
    }));
  }

  public parseRichText(richText: any) {
    return documentToHtmlString(richText);
  }
}
