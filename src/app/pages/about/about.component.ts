import {Component} from '@angular/core';
import {APP_CONFIG} from '../../core/config/app.config';

export interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutPage {

  public aboutText: string;

  constructor() {
    this.aboutText = APP_CONFIG.about;
  }

}
