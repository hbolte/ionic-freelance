import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {ILegal} from './core/models/legal.interface';
import {Plugins, StatusBarStyle} from '@capacitor/core';

const {StatusBar} = Plugins;
const {SplashScreen} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'About',
      url: '/about',
      icon: 'person-outline'
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'code-outline'
    },
    {
      title: 'Skills',
      url: '/skills',
      icon: 'school-outline'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'mail-unread-outline'
    },
    {
      title: 'Imprint',
      url: '/imprint',
      icon: 'business-outline'
    },
    {
      title: 'Privacy',
      url: '/privacy',
      icon: 'lock-closed-outline'
    }
  ];

  public settings: ILegal;

  constructor(
    private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.setStyle({
          style: this.platform.is('android') ? StatusBarStyle.Dark : StatusBarStyle.Light,
        });
        StatusBar.setBackgroundColor({color: '#949494'});
        SplashScreen.hide();
      }
    });

  }
}
