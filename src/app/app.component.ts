import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppService} from './core/provider/app.service';
import {ISettings} from './core/interfaces/settings.interface';
import {SocialService} from "./core/provider/social.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Projects',
      url: '/projects'
    },
    {
      title: 'Skills',
      url: '/skills'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ];

  public settings: ISettings;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private app: AppService,
    private social: SocialService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.social.listen();
    this.app.listen();

    this.app.settings$.subscribe(data => this.settings = data);

    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }
}
