import {Component} from '@angular/core';
import {ISkill} from '../../core/models/skill.interface';
import {Observable} from 'rxjs';
import {ContentfulService} from '../../core/contentful/provider/contentful.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage {

  public skills$: Observable<ISkill[]>;

  public options = {
    initialSlide: 0,
    speed: 500,
    autoplay: {
      delay: 4000
    },
    loop: true
  };

  constructor(private contentfulService: ContentfulService) {
  }

  public ionViewDidEnter() {
    this.skills$ = this.contentfulService.getEntries('skills', {
      order: 'sys.createdAt',
    });
  }

}
