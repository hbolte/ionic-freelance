import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IProject} from '../../core/models/project.interface';
import {Plugins} from '@capacitor/core';
import {ContentfulService} from '../../core/contentful/provider/contentful.service';
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';

const {Browser} = Plugins;

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsPage {

  public projects$: Observable<IProject[]>;

  constructor(private contentfulService: ContentfulService) {
  }

  public ionViewDidEnter() {
    this.projects$ = this.contentfulService.getEntries('projects', {
      order: '-fields.createdAt',
    });
  }

  public async openLink(repo: string) {
    await Browser.open({
      url: repo
    });
  }

  public parseRichText(richText: any) {
    return documentToHtmlString(richText);
  }
}
