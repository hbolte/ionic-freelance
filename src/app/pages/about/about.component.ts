import {Component} from '@angular/core';

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

  constructor() {

  }

}
