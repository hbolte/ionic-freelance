import {Component} from '@angular/core';
import {APP_CONFIG} from '../../core/config/app.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage {

  public skills: string[];

  constructor() {
    this.skills = APP_CONFIG.skills;
  }
}
