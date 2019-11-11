import { Component } from '@angular/core';
import {SwitchThemeService} from '../services/switch-theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private switchThemeService: SwitchThemeService) {}

  switchTheme(theme: string) {
    this.switchThemeService.switch(theme);
  }
}
